import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
@Output() emmitroute = new EventEmitter<any>()
  Route: Record<'baser',{icon:string,route:string}[]> ={baser: [
    { icon: 'fa-solid fa-house', route: 'Home' },
    { icon: 'fa-regular fa-calendar-days', route: 'Events' },
    { icon: 'fa-brands fa-connectdevelop', route: 'Matches' },
    { icon: 'fa-brands fa-rocketchat', route: 'Chats' },
    { icon: 'fa-solid fa-user-doctor', route: 'Profile' },
    { icon: 'fa-solid fa-wrench', route: 'Settings' },
  ]
}
emitroute(e:any, currentRoute: string):any{


  for(const aroute of this.Route['baser']) {

    if (currentRoute === aroute.route) {
      
      return this.emmitroute.emit(aroute['route' as keyof object]);
    }
  }
  // return this.emmitroute
}
public tolower(route:string):string{
  return route.toLowerCase();
}
}
