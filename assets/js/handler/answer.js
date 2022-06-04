import { users } from "../init_user";
const HandleAnswer = {
    mounted () {
      let data = this.el.dataset
      let fromUser = data.fromUserUuid
      let sdp = data.sdp
      let peerConnection = users[fromUser].peerConnection
  
      if (sdp != "") {
        console.log("new sdp ANSWER from", fromUser, sdp)
        peerConnection.setRemoteDescription({type: "answer", sdp: sdp})
      }
    }
  }
  export default HandleAnswer;