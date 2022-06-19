import "./Create.css"

function Create({handleClickData, handleContent, handleTitle, handleUsername}) {

  return <form className="input_form" onSubmit={handleClickData}>
          <textarea type="text" placeholder="내용을 입력하세요" onChange={handleContent}></textarea>
          <input className="title" type="text" placeholder="제목" onChange={handleTitle}></input>
          <input className="username" type="text" placeholder="당신의 이름은?" onChange={handleUsername}></input>
          <input className="submitBtn" type="submit" ></input>
  </form>
}

export default Create