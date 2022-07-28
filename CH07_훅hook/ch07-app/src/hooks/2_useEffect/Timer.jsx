import React from 'react'
import { useEffect } from 'react'

function Timer() {

    useEffect(() => {
        const updateTime = setInterval(() => {
            console.log("⏱.......");
        }, 1000);

        // 마운트 해제시 실행 정지(정리 작업)
        // 이것이 없으면 계쏙 돌아감.....;;;;;;;;;^^;;;;;

        // 언마운트시 처리작업
        return () => {
            clearInterval(updateTime);
            console.log("🔴 타이머 종료")
        }

    }, []); // 마운트 && 언마운트 시 처리가 완료


    return (
        <div>
            <span>
                타이머를 시작합니다. 콘솔을 확인하세요 ^ㅅ^
            </span>
        </div>
    )
}

export default Timer