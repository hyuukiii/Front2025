const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');
const loginErrorMessage = document.querySelector('.login-error-message');

inputs.forEach(input => {
    // 플레이스홀더 추가
    input.setAttribute('placeholder', `Enter your ${input.name}`);
    
    // 입력 시작할 때 에러 메시지 숨기기
    input.addEventListener('input', () => {
        const errorMessage = input.nextElementSibling;
        errorMessage.style.opacity = '0';
        input.style.borderColor = '#eee';
        // 로그인 에러 메시지 숨기기
        loginErrorMessage.style.display = 'none';
    });
});

// - - - - -  - - - - - - - - - - - - - - - - - - - - - - //

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#e74c3c';
            const errorMessage = input.nextElementSibling;
            errorMessage.style.opacity = '1';
            errorMessage.style.transform = 'translateY(0)';
        }
    });
    
    if (isValid) {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // 여기서 실제 로그인 검증을 해야함
        // 예시로 로그인 실패 상황을 보여주기 위한 코드:
        try {
            // 서버로 로그인 요청을 보내고 응답을 기다립니다
            // const response = await fetch('/api/login', {...});
            
            // 임시로 로그인 실패 상황 시뮬레이션
            throw new Error('Login failed');
            
        } catch (error) {
            // 로그인 실패 시 에러 메시지 표시
            loginErrorMessage.style.display = 'block';
            inputs.forEach(input => {
                input.style.borderColor = '#e74c3c';
            });
            // 비밀번호 필드 초기화
            document.getElementById('password').value = '';
        }
    }
});