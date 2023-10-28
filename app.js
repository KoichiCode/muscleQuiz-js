const quiz = [
  {
    question:'大胸筋を鍛えるための種目は次のうちどれ？',
    answers:[
      'スクワット', 
      'ベンチプレス', 
      'デッドリフト', 
      'ワンハンドローイング'
    ],
    correct:'ベンチプレス'
  },{
    question:'背中を鍛えるための種目として適切でないものは次のうちどれ？',
    answers:[
      '懸垂', 
      'デッドリフト', 
      'ラッドプルダウン', 
      'スカルクラッシャー'
    ],
    correct:'スカルクラッシャー'
  },{
    question:'トライセップス（上腕三頭筋）を鍛えるための種目として適切でないものは次のうちどれ？',
    answers:[
      'フレンチプレス', 
      'ディップス', 
      'サイドレイズ', 
      'スカルクラッシャー'
    ],
    correct:'サイドレイズ'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


// クイズの問題文、選択肢を定義する
const setupQuiz = () =>{
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
  // ここに命令
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();


const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  }else{
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
// まだ問題があればこちらを実行
   setupQuiz();
  }else{
// もう問題がなければこちらを実行
   window.alert('終了！あなたの正解数は'+ score + '/' + quizLength + 'です！');
  }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
