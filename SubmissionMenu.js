class SubmissionMenu { 
    constructor({ caster, enemy, onComplete }) {
      this.caster = caster;
      this.enemy = enemy;
      this.onComplete = onComplete;
    }

    getPages() {

      const backOption = {
        label: "Quay Về",
        description: "Quay Lại Trang Gần Đây",
        handler: () => {
          this.keyboardMenu.setOptions( this.getPages().root )
        }
      }

      return {
        root: [
          {
            label: "Tấn Công",
            description: "Chọn Một Hành Động",
            handler: () => {
              // do something when chosen ...
              this.keyboardMenu.setOptions( this.getPages().attacks )
            } 
          },
          {
            label: "Vật Phẩm",
            description: "Chọn Một Vật Phẩm",
            handler: () => {
              // Go to item page
              this.keyboardMenu.setOptions( this.getPages().items )
            }
          },
          {
            label: "Thay Đổi",
            description: "Thay Đổi 1 Pizza Khác",
            handler: () => {
              // see the pizza option
            }
          },
        ],
        attacks: [
          ...this.caster.actions.map(key => {
            const action = Actions[key];
            return {
              label: action.name,
              description: action.description,
              handler: () => {
                this.menuSubmit(action);
              }
            }
          }),
          backOption
        ],
        items: [
          //item will go here
          backOption
        ],
      }
    }

    menuSubmit(action, instanceId=null) {

      this.keyboardMenu?.end();

      this.onComplete({
        action,
        target: action.targetType === "friendly" ? this.caster : this.enemy
      })
    }
  
    decide() {
      //TODO enemy randomly decide what to do..
      this.menuSubmit(Actions[ this.caster.actions[0] ])
    }

    showMenu(container) {
      this.keyboardMenu = new KeyboardMenu();
      this.keyboardMenu.init(container);
      this.keyboardMenu.setOptions( this.getPages().root )
    }
  
    init(container) {

      if (this.caster.isPlayerControlled) {
        // Show some UI
        this.showMenu(container)
      }else {
        this.decide();
      }
    }
  }