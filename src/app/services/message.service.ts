import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
// export class MessageService {

//   constructor() { }
// }



// 消息中专服务
// @Injectable()
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<any>();
  /**
   * content模块里面进行信息传输，类似广播
   * @param type 发送的信息类型
   *        1-你的信息
   *        2-你的信息
   *        3-你的信息
   *        4-你的信息
   *        5-你的信息
   */
  sendMessage(type: number) {
    console.log('TAG' + '---------->>>' + type);
    this.subject.next({ type: type });
  }
  /**
  * 清理消息
  */
  clearMessage() {
    this.subject.next();
  }
  /**
  * 获得消息
  * @returns {Observable<any>} 返回消息监听
  */
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
// // 使用该服务的地方，需要注册MessageService服务；
// constructor(private message: MessageService) {
// }
//    // 消息接受的地方；
//    public subscription: Subscription;
// ngAfterViewInit(): void {
//   this.subscription = this.message.getMessage().subscribe(msg => {
//     // 根据msg，来处理你的业务逻辑。
//   })
// }

// // 组件生命周期结束的时候，记得注销一下，不然会卡；
// ngOnDestroy(): void {
//   this.subscription.unsubscribe();
// }

// // 调用该服务的方法，发送信息；
// send(): void {
//   this.message.sendMessage(‘我发消息了，你们接受下’);  // 发送信息消息
// }
