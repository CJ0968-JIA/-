// === 背景相關 ===
let stars = [];
let image3;
let showImage3 = false;

function preload() {
  image3 = loadImage('3.png'); // 載入圖片3
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 40; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(30, 50),
      color: color(random(255), random(255), random(255), random(100, 200))
    });
  }
  createMenu();
}

function draw() {
  background("#d8e2dc");
  for (let star of stars) {
    let dynamicSize = map(mouseX, 0, width, 20, 80);
    fill(star.color);
    noStroke();
    ellipse(star.x, star.y, star.size * dynamicSize / 50);
  }

  // 在視窗中間加入文字「首頁」
  textAlign(CENTER, CENTER);
  textSize(32);
  fill("#003554");
  text("首頁", width / 2, height / 2);

  // 顯示圖片3
  if (showImage3) {
    image(image3, 20, height - 120, 100, 100); // 在左下角顯示
  }
}

// === 選單相關 ===
let menu;
let activeContent = null; // 用於追蹤當前顯示的內容

function createMenu() {
  menu = createDiv();
  menu.position(10, 10);
  menu.style('background', '#ffffff');
  menu.style('padding', '10px');
  menu.style('border-radius', '5px');
  menu.style('box-shadow', '0 4px 6px rgba(0, 0, 0, 0.1)');
  menu.style('border', '2px solid #1b4332'); // 修改邊框顏色

  let items = [
    { 
      label: '自我介紹', 
      action: () => {
        clearActiveContent();
        activeContent = createDiv('413730564 朱珈嫻 教科一B');
        activeContent.style('color', '#4f6d7a');
        activeContent.style('font-size', '16px');
        activeContent.style('text-align', 'center');
        activeContent.position(width / 2 - 100, height / 2 + 60); // 顯示在首頁下方
      } 
    },
    { 
      label: '教學影片', 
      action: () => {
        clearActiveContent();
        activeContent = createElement('iframe');
        activeContent.attribute('src', 'https://cfchen58.synology.me/%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%882024/B2/week8/20250407_101522.mp4');
        activeContent.attribute('width', '800'); // 調整寬度
        activeContent.attribute('height', '450'); // 調整高度
        activeContent.attribute('allowfullscreen', true);
        activeContent.style('border', 'none');
        activeContent.style('position', 'absolute');
        activeContent.style('top', '50%');
        activeContent.style('left', '50%');
        activeContent.style('transform', 'translate(-50%, -50%)');
        document.body.appendChild(activeContent.elt);
      }
    },
    { 
      label: '作品集', 
      subItems: [
        { 
          label: '項目一', 
          action: () => {
            clearActiveContent();
            activeContent = createElement('iframe');
            activeContent.attribute('src', 'https://cj0968-jia.github.io/0310/');
            activeContent.attribute('width', '800'); // 調整寬度
            activeContent.attribute('height', '450'); // 調整高度
            activeContent.attribute('allowfullscreen', true);
            activeContent.style('border', 'none');
            activeContent.style('position', 'absolute');
            activeContent.style('top', '50%');
            activeContent.style('left', '50%');
            activeContent.style('transform', 'translate(-50%, -50%)');
            document.body.appendChild(activeContent.elt);
          }
        },
        { 
          label: '項目二', 
          action: () => {
            clearActiveContent();
            activeContent = createElement('iframe');
            activeContent.attribute('src', 'https://cj0968-jia.github.io/20250303/');
            activeContent.attribute('width', '800'); // 調整寬度
            activeContent.attribute('height', '450'); // 調整高度
            activeContent.attribute('allowfullscreen', true);
            activeContent.style('border', 'none');
            activeContent.style('position', 'absolute');
            activeContent.style('top', '50%');
            activeContent.style('left', '50%');
            activeContent.style('transform', 'translate(-50%, -50%)');
            document.body.appendChild(activeContent.elt);
          }
        },
        { 
          label: '項目三', 
          action: () => {
            clearActiveContent();
            activeContent = createElement('iframe');
            activeContent.attribute('src', 'https://cj0968-jia.github.io/0317/');
            activeContent.attribute('width', '800'); // 調整寬度
            activeContent.attribute('height', '450'); // 調整高度
            activeContent.attribute('allowfullscreen', true);
            activeContent.style('border', 'none');
            activeContent.style('position', 'absolute');
            activeContent.style('top', '50%');
            activeContent.style('left', '50%');
            activeContent.style('transform', 'translate(-50%, -50%)');
            document.body.appendChild(activeContent.elt);
          }
        }
      ]
    },
    { 
      label: '筆記', 
      action: () => {
        clearActiveContent();
        activeContent = createElement('iframe');
        activeContent.attribute('src', 'https://hackmd.io/@CJia/HyO10Ht01e');
        activeContent.attribute('width', '800'); // 調整寬度
        activeContent.attribute('height', '450'); // 調整高度
        activeContent.attribute('allowfullscreen', true);
        activeContent.style('border', 'none');
        activeContent.style('position', 'absolute');
        activeContent.style('top', '50%');
        activeContent.style('left', '50%');
        activeContent.style('transform', 'translate(-50%, -50%)');
        document.body.appendChild(activeContent.elt);
      }
    },
    { 
      label: '測驗題', 
      action: () => {
        clearActiveContent();
        activeContent = createDiv();
        activeContent.style('position', 'absolute');
        activeContent.style('top', '50%');
        activeContent.style('left', '50%');
        activeContent.style('transform', 'translate(-50%, -50%)');
        activeContent.style('background', '#ffffff');
        activeContent.style('padding', '20px');
        activeContent.style('border-radius', '10px');
        activeContent.style('box-shadow', '0 4px 6px rgba(0, 0, 0, 0.1)');
        activeContent.style('text-align', 'center');
        document.body.appendChild(activeContent.elt);

        generateQuiz(activeContent);
      }
    }
  ];

  for (let item of items) {
    let button = createButton(item.label);
    button.parent(menu);
    button.style('display', 'block');
    button.style('margin', '5px 0');
    button.style('color', '#000000');
    button.mousePressed(item.action);

    button.mouseOver(() => {
      button.style('color', '#5f7470');
      showImage3 = true; // 顯示圖片3
    });
    button.mouseOut(() => {
      button.style('color', '#000000');
      showImage3 = false; // 隱藏圖片3
    });

    if (item.subItems) {
      let subMenu = createDiv();
      subMenu.style('margin-left', '10px');
      subMenu.style('display', 'none');
      subMenu.parent(menu);

      for (let subItem of item.subItems) {
        let subButton = createButton(subItem.label);
        subButton.parent(subMenu);
        subButton.style('display', 'block');
        subButton.style('margin', '2px 0');
        subButton.style('color', '#000000');
        subButton.mousePressed(subItem.action);

        subButton.mouseOver(() => {
          subButton.style('color', '#5f7470');
          showImage3 = true; // 顯示圖片3
        });
        subButton.mouseOut(() => {
          subButton.style('color', '#000000');
          showImage3 = false; // 隱藏圖片3
        });
      }

      button.mousePressed(() => {
        let display = subMenu.style('display') === 'none' ? 'block' : 'none';
        subMenu.style('display', display);
      });
    }
  }
}

function clearActiveContent() {
  if (activeContent) {
    activeContent.remove();
    activeContent = null;
  }
}

// === 測驗題相關 ===
function generateQuiz(container) {
  const questions = [];
  for (let i = 0; i < 5; i++) {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const correctAnswer = num1 + num2;
    const options = [
      correctAnswer,
      correctAnswer + Math.floor(Math.random() * 5) + 1,
      correctAnswer - Math.floor(Math.random() * 5) - 1
    ].sort(() => Math.random() - 0.5);

    questions.push({ question: `${num1} + ${num2} = ?`, options, correctAnswer });
  }

  container.html('');
  questions.forEach((q, index) => {
    const questionDiv = createDiv(`${index + 1}. ${q.question}`);
    questionDiv.style('margin-bottom', '10px');
    questionDiv.parent(container);

    q.options.forEach(option => {
      const button = createButton(option);
      button.style('margin', '5px');
      button.parent(container);
      button.mousePressed(() => {
        if (option === q.correctAnswer) {
          alert('答對了！');
        } else {
          alert('答錯了！');
        }
      });
    });
  });
}
