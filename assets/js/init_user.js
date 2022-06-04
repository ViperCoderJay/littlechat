export var users = {}

function addUserConnection(userUuid) {
    if (users[userUuid] === undefined) {
        users[userUuid] = {
            peerConnection: null
        }
    }
    return users
}
  
function removeUserConnection(userUuid) {
    delete users[userUuid]
    return users
}

const InitUser = {
    mounted () {
        addUserConnection(this.el.dataset.userUuid)
    },
  
    destroyed () {
        removeUserConnection(this.el.dataset.userUuid)
    }
}
export default InitUser;