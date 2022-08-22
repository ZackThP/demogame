window.Actions = {
    damage1: {
      name: "Whomp!",
      description: "Tấn Công Thường",
      success: [
        { type: "textMessage", text: "{CASTER} Sử Dụng {ACTION}!"},
        { type: "animation", animation: "spin"},
        { type: "stateChange", damage: 10}
      ]
    },
    saucyStatus: {
      name: "Tomato Spueeze",
      description: "Vào Trạng Thái PHÊ SỐT Giúp Buff Máu",
      targetType: "friendly",
      success: [
        { type: "textMessage", text: "{CASTER} Sử Dụng {ACTION}!"},
        { type: "stateChange", status: { type: "saucy", expiresIn: 3 } }
      ]
    },
    clumsyStatus: {
      name: "Olive oil",
      description: "Đổ Dầu Olive Vào Đối Thủ Sẽ Bị Vụng Về",
      success: [
        { type: "textMessage", text: "{CASTER} Sử Dụng {ACTION}!"},
        { type: "animation",animation: "glob", color:"#dafd2a" },
        { type: "stateChange", status: { type: "clumsy", expiresIn: 3 } },
        { type: "textMessage", text: "{TARGET} Đang Bị Trơn Trượt!"},
      ]
    },
  }