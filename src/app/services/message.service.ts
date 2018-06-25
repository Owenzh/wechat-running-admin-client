import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

// 消息中专服务
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
  sendMessage(msg: any) {
    setTimeout(() => {
      this.subject.next({ info: msg });
    }, 100);
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
