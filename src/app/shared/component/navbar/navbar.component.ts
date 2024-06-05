import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public flag : boolean = true
  public show !: boolean 
  constructor() { 
    // this.show = !1
  }

  ngOnInit(): void {
    window.addEventListener('scroll',()=>{
      window.scrollY > 300 ? document.querySelector(".fixed-top")?.classList.add("nav-active") : document.querySelector(".fixed-top")?.classList.remove("nav-active")
    }),
    document.querySelectorAll(".socialBrand > a").forEach(n=>{
      n.addEventListener("click", ()=>{
          this.show = !this.show
      }
      )
  }
  )
  }

  onNavbarOpen(nav : any){
    if(this.flag === true){
      nav.classList.add('show')
      this.flag = false
    }else{
      nav.classList.remove('show')
      this.flag = true
    }
  }

}
