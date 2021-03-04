import React, {useEffect} from "react";
import FocusableInput from "./FocusableInput";
import "./styles.css";


const App = () => {
  const [focused, setFocused] = React.useState(false);
  const [input, setInput] = React.useState({
    text:"", key: true
  });
  const [_input, _setInput] = React.useState({
    _text:"",
  });

  const { text } = input
  const { _text } = _input

  const handleChangeFocused = (e) => {
    setFocused(!focused);
    console.log(focused);
  };
  const handleChangeInput = (e) => {
    const { value } = e.target;
    setInput({
      ...input,
      text: value,
      key: false
    })

    // setTimeout(() => {
    //   console.log(input);
    // }, 1000);
  }
  // Trie.prototype.delete = function (word){
  //   this.deleteRecursively(this.root, word, 0)
  // }

  // Trie.prototype.deleteRecursively = function(current, word, index) {
  //   if(index == word.length){
  //     if(!current.endOfWord){
  //       return false;
  //     }
  //     current.endOfWord = false;
  //     return Object.keys(current.children).length ==0;
  //   }
  //   var ch = word.charAt(index),
  //       node = current.children[ch]
  //   if (node == null) {
  //     return false;
  //   }
  //   var shouldDeleteCurrentNode = this.deleteRecursively(node,word,index +1);
  //   if (shouldDeleteCurrentNode){
  //     delete current.children[ch];
  //     return Object.keys(current.children).length ==0;
  //   }
  //   return false
  // }

  // const trie1 = new Trie();

  useEffect(()=>{
    if (input.key === false){
      setInput({
        ...input,
        key: true
      })

      _setInput({
        ..._input,
        _text:text
      })



    }
    var str1 = input.text
    var str2 = _input._text
    if (str2 && str1 !== '') {

      var match = str1.match(str2)
      console.log('전 match',match)
      var replace = str1.replace(match,'')
      console.log('업데이트전cut',replace)
    }
    return () => {


        var str1 = input.text
        var str2 = _input._text

        if (str2 && str1 !== '') {

          var match = str1.match(str2)
          console.log('후 match',match)
          var replace = str1.replace(match,'/\d+/')
          console.log('업데이트후cut',replace)
        }

      
        // console.log('업데이트후str1', str1)
        // console.log('업데이트후str2', str2)
        // console.log('업데이트후re', match)
        // console.log('업데이트후cut',replace)
    }
  })
  // const handleClick = e => {
  //   setBb(e.target.value)
  //   console.log(bb)
  // }

  return (
    <div>
      <p>
        Q1. FocusableInput.js를 수정하여, focused가 false에서 true로 변할 때
        텍스트 입력란에 자동으로 포커스가 가도록 하십시오.
        <br />
      </p>
      <p>
        Q2. 텍스트 입력란의 내용에 변경이 있을 때마다 즉시 콘솔에 현재 텍스트를
        출력하게 되어 있습니다. 프로그램을 수정하여, 변경 발생 후 1초간 추가적인
        변경이 없을 때만 출력을 하도록 만드십시오.
      </p>
      <p>
        Q3. 텍스트 입력란의 내용에 변경이 있을 때마다 콘솔에 입력내용 전체가
        출력되고 있습니다. 프로그램을 수정하여, 전체 입력내용이 아니라 새로
        추가된 글자들만 출력되도록 하십시오. 예) 'ad' - 'abbd'로 변경된 경우
        중간의 'bb'만 출력
      </p>
      <p>
        <FocusableInput 
        focused={focused} 
        onChange={handleChangeInput} 
        name="name"
        value={text}
        />
      </p>

      <p>

        <input
          type="checkbox"
          checked={focused}
          onChange={handleChangeFocused}

        />
        
        &nbsp;focused

      </p>
      {/* <p>{input}</p> */}

    </div>
  );
};

export default App;
