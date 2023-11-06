const currentUser = document.querySelector('#user-name')
const userEmail = document.querySelector('#user-email')
const userMessage = document.querySelector('#user-message')

const sendFormBtn = document.querySelector('.submit-btn')

const userData = []

sendFormBtn.addEventListener('click', e => {
	e.preventDefault()
	addUserInfo(currentUser.value, userEmail.value, userMessage.value)
})

const addUserInfo = (userName, userEm, userMess) => {
	userData.push({ name: userName, email: userEm, message: userMess })
}
