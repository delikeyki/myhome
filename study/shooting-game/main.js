//캔버스 세팅
let canvas
let ctx
canvas = document.createElement("canvas")
ctx = canvas.getContext("2d") //2d를 캔버스에 넣어줌 
canvas.width = 400
canvas.height = 700
document.body.appendChild(canvas)

//기본항목 변수세팅
let backgroundImage, spaceshipImage, bulletImage, enemyImage, gameOverImage, boomImage
let gameOver=false 
let score = 0

//우주선 초기 좌표 
let spaceshipX = canvas.width/2 - 24 //48x48 우주선이미지 사이즈, 중앙에 오도록 설정
let spaceshipY = canvas.height - 48

//이미지 세팅
function loadImage(){
    backgroundImage = new Image();
    backgroundImage.src = "/images/bg.jfif"

    spaceshipImage = new Image()
    spaceshipImage.src = "/images/spaceship.png"
 
    bulletImage = new Image()
    bulletImage.src = "/images/bullet.png"

    enemyImage = new Image()
    enemyImage.src = "/images/enemy.png"

    gameOverImage = new Image()
    gameOverImage.src = "/images/gameover.png"

    boomImage = new Image()
    boomImage.src = "/images/bang.png"
}

//키보드이벤트 셋팅
let keysDown = {} //누른 키를 저장해둠 
function setupKeyboardListener(){
    document.addEventListener("keydown", function(event){ //키를 누르면 keysDown에 값을 저장 
        keysDown[event.keyCode] = true
        //console.log("keyDown객체에 들어간 값은", keysDown)  
    })
    document.addEventListener("keyup", function(event){ //키를 떼면 keyDown에 값을 삭제 
        delete keysDown[event.keyCode]
        //console.log("버튼 클릭후", keysDown)

        if(event.keyCode == 32) { //스페이스를 누르면 총알 생성 함수 호출
            createBullet()
        }
    })
}

// 좌표 상태를 업데이트 
function update() {
    if(39 in keysDown) { //방향키 오른쪽 버튼이 눌렸다면 우주선을 오른쪽으로 이동 
        spaceshipX += 5 //우주선 속도 
    }
    if (37 in keysDown) { //왼쪽 버튼이 눌렸다면 우주선을 왼쪽으로 이동 
        spaceshipX -= 5
    }
    // 캔버스 가로사이즈를 넘지 않도록 위치값 제한 
    if (spaceshipX <= 0 ) {
        spaceshipX = 0 
    }
    if (spaceshipX >= canvas.width - 48 ) {
        spaceshipX = canvas.width - 48 
    }

    //총알의 y좌표 업데이트 함수 호출 
    for(let i=0; i<bulletList.length;i++){
        if(bulletList[i].alive){
            bulletList[i].update()
            bulletList[i].checkHit()
        }
    }

    //적군 y좌표 업데이트 함수 호출 
    for(let i=0; i<enemyList.length;i++){
        enemyList[i].update()
    }
}

//총알 기본 세팅 함수
let bulletList = [] //총알들을 저장할 리스트 
function Bullet(){
    this.x = 0
    this.y = 0
    this.init = function(){
        this.x = spaceshipX + 12 //총알의 x좌표는 우주선의 중앙
        this.y = spaceshipY
        this.alive = true //총알의 상태 
        bulletList.push(this)
    }
    this.update = function(){ //총알움직임
        this.y -= 7 
    }

    this.checkHit = function(){ 
        for(let i=0; i<enemyList.length; i++){
            //총알의 좌표가 적군의 좌표안으로 들어갔을 때 총알 죽음
            if(this.y <= enemyList[i].y && this.x >= enemyList[i].x - 20 && this.x <= enemyList[i].x + 68) {  //적군의 범위를 크게하여 난이도를 낮춤
                score++ //점수획득
                this.alive = false //총알 소모
                enemyList[i].alive = false //적군의 상태값을 변경시켜 적군이미지를 붐이미지로 랜더링하고자 함 
                setTimeout(()=>{
                    enemyList.splice(i,1) //적군 죽음, 붐이미지 그려준 후 적군 배열에서 삭제 
                }, 50)
                
            }
        }
        
    }
}

// 총알생성 함수
function createBullet(){
    let b = new Bullet() //총알생성 
    b.init()
    //console.log("총알리스트", bulletList)
}

//적군 x좌표 랜덤하게 만들 함수 
function generateRandomValue(min,max) {
    let randomNum = Math.floor(Math.random()*(max-min+1))+min  //최소,최대값을 설정한 범위 내에서 랜덤 정수 만들기
    return randomNum
}

//적군 세팅 함수 
let enemyList = []
function Enemy(){
    this.x = 0
    this.y = 0
    this.init = function(){
        this.y = 0
        this.x = generateRandomValue(0,canvas.width-48)
        enemyList.push(this)
    }
    this.alive = true
    this.update = function(){
        this.y += 2  //적군의 내려오는 속도 조절
        if(this.y >= canvas.height-48) { //적군이 바닥에 닿았을 때 게임 종료
            gameOver = true
            //console.log("gameover")
        }
    }
}

function createEnemy(){
    const interval = setInterval(function(){
        let e = new Enemy()
        e.init()
    }, 1000) //1초마다 적군생성
}

function render(){
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height) //배경이미지 그려줌
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY) //우주선이미지 그려줌 
    ctx.fillText(`Score:${score}`, 10, 20) //스코어텍스트 표기
    ctx.fillStyle = "white" //스코어텍스트 스타일 
    ctx.font = "20px Arial" //스코어텍스트 스타일
    
    //총알 그려줌 
    for(let i=0; i<bulletList.length; i++){ //총알리스트를 순회하면서
        if(bulletList[i].alive) { //총알이 살아있다면
            ctx.drawImage(bulletImage, bulletList[i].x, bulletList[i].y) //총알을 그려줌
        }
    }

    for(let i=0; i<enemyList.length; i++){ //적군리스트를 순회하면서 적군을 그려줌 
        if(!enemyList[i].alive) {
            ctx.drawImage(boomImage, enemyList[i].x, enemyList[i].y)
        } else {
            ctx.drawImage(enemyImage, enemyList[i].x, enemyList[i].y)
        }
    }
}

function main(){
    if(!gameOver) {
        update() //좌표값을 업데이트하고 
        render() //그려줌
        requestAnimationFrame(main) //화면을 계속 호출하여 애니메이션 기능을 하게함 
    } else {
        ctx.drawImage(gameOverImage, 10, 100, 380, 380) //x=10,y=100위치에 380x380사이즈로 게임오버이미지 그려줌
    }
}

loadImage()
setupKeyboardListener()
createEnemy()
main()

//총알만들기
//1.스페이스 누르면 총알발사 2. 총알이 발사되면 총알의 Y좌표가 -- 3. 총알의 발사 X좌표는 키를 누른 순간의 스페이스쉽의 X좌표
// 4. 발사된 총알은 총알 배열에 저장함 5. 총알은 x,y 좌표값이 있어야 한다. 6. 총알배열을 가지고 render함

//적군이 죽는다
// 1. 총알과 적군이 만나는 지점 : 총알.y <= 적군.y && 총알.x >= 적군.x && 총알.x <= 적군.x+48