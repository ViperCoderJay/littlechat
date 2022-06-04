import { users } from "../init_user";
const HandleIceCandidateOffer = {
    mounted () {
      let data = this.el.dataset
      let fromUser = data.fromUserUuid
      let iceCandidate = JSON.parse(data.iceCandidate)
      let peerConnection = users[fromUser].peerConnection
  
      console.log("new ice candidate from", fromUser, iceCandidate)
  
      peerConnection.addIceCandidate(iceCandidate)
    }
  }
  export default HandleIceCandidateOffer;