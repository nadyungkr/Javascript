const scriptName = "생성한 봇의 이름을 정확하게 기재해주세요"";
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
   //function response에 인자로 받는 내용들은 봇에서 생성된 내용입니다
   if(msg == "자동응답을 실행하기 위한 메세지"&&room == "본인의 카카오톡에 설정된 봇을 실행할 채팅방의 이름"){
   replier.reply("자동으로 응답 될 메세지를 작성해주세요");
   }
}

/*
msg = 자동응답을 실행하기 위해서 채팅방에 있는 사람들이 봇을 불러 오기위해 작성하는 메세지입니다
본인이 채팅방의 내용을 읽고 있거나, 호출메세지를 작성하면 작동하지 않습니다.

room = 본인이 직접 설정한 그 방의 이름을 정확하게 적어야 합니다. 편의에 의해 있는 단톡의 이름을 바꾸었다면 그 바꾼 이름을 꼭 기재해야 합니다.active

if()문을 통해 msg, room의 조건이 참일 경우 답장의 기능 reply를 실행하도록 합니다.

replier.reply() = 자동으로 응답이 될 메세지를 작성하면 됩니다
*/
