const quiz = [
  {
    question: 'チェブラーシカはどこの国のキャラクターでしょうか？',
    answers: [
      'アメリカ',
      '日本',
      'ロシア',
      'フランス'
  ],
  correct: 'ロシア'
  },{
    question: 'チェブラーシカが初めて登場した際に入っていたのは何のくだものの箱でしょうか？',
    answers: [
      'オレンジ',
      'パイナップル',
      'バナナ',
      'りんご'
  ],
  correct: 'オレンジ'
  },{
    question: 'チェブラーシカの親友のワニの名前は？',
    answers: [
      'イスマイル',
      'ゲーナ',
      'スティーブ',
      'ジーニー'
  ],
  correct: 'ゲーナ'
  },{
    question: 'チェブラーシカの親友のワニの働いている場所は？',
    answers: [
      '学校',
      '遊園地',
      '病院',
      '動物園'
  ],
  correct: '動物園'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert('終了！ あなたの正解数は' + quizLength + '問中' + score + '問です！！');
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click',(e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

