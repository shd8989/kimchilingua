import { useCallback, useEffect, useState } from 'react';
import { db } from "../common/firebase";

function Index() {
    const [tasks, setTasks] = useState([]);

    const fetchData = useCallback(() => {
        // 받아온 데이터를 저장할 배열
        let tasksData = [];
    
        // firestore.js에서 가져온 firestore 객체
        db
            .collection("admin") //  "tasks" 컬렉션 반환
            .get() // "tasks" 컬렉션의 모든 다큐먼트를 갖는 프로미스 반환
            .then((docs) => {
            // forEach 함수로 각각의 다큐먼트에 함수 실행
            docs.forEach((doc) => {
                // data(), id로 다큐먼트 필드, id 조회
                tasksData.push({ todo: doc.data().todo, id: doc.id });
            });
            // tasks state에 받아온 데이터 추가
            setTasks((prevTasks) => prevTasks.concat(tasksData));
        });
    }, []);
    
    // 최초 렌더링 이후에 실행하기 위해 useEffect 내부에서 함수 실행
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
        <section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Admin</h2>
                </div>
                
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input class="form-control" id="name" type="text" placeholder="아이디" data-sb-validations="required" />
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div class="form-group">
                                <input class="form-control" id="email" type="email" placeholder="비밀번호" data-sb-validations="required,email" />
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="d-none" id="submitSuccessMessage">
                        <div class="text-center text-white mb-3">
                            <div class="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                    
                    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                    
                    <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
                </form>
            </div>
        </section>
        </>
    )
}

export default Index;