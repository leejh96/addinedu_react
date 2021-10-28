import React from "react";
import status from "./todostatus.module.css";
function TodoStatus() {
  return (
    <section className="section">
      <div className={status.wrap}>
        <div className={status.left}>10개 남음</div>
        <div className={status.filter}>
          <button className={status.btn} type="button">
            전체목록
          </button>
          <button className={status.btn} type="button">
            남은목록
          </button>
          <button className={status.btn} type="button">
            완료목록
          </button>
        </div>
        <div className={status.clear}>
          <button className={status.btn} type="button">
            완료삭제
          </button>
        </div>
      </div>
    </section>
  );
}

export default TodoStatus;
