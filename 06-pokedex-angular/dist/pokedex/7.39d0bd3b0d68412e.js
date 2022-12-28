"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[7],{1007:(w,g,c)=>{c.r(g),c.d(g,{DashboardModule:()=>y});var m=c(103),e=c(1223),d=c(9808),p=c(8845);function f(n,i){if(1&n){const o=e.EpF();e.TgZ(0,"div",6),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.remove())}),e._UZ(1,"i",7),e.qZA()}}const u=function(n){return["/pokemon-profile",n]};let l=(()=>{class n{constructor(){this.pokemon=new m.b,this.isFavorite=!1,this.removeFromFavorites=new e.vpe,this.viewPokemon=new e.vpe}ngOnInit(){}getSprite(){var o,t,r,a;return null==(null===(t=null===(o=this.pokemon.sprites)||void 0===o?void 0:o.other)||void 0===t?void 0:t.dream_world.front_default)?"":null===(a=null===(r=this.pokemon.sprites)||void 0===r?void 0:r.other)||void 0===a?void 0:a.dream_world.front_default}remove(){this.removeFromFavorites.emit(this.pokemon)}view(){this.viewPokemon.emit(this.pokemon)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["pokemon-card"]],inputs:{pokemon:"pokemon",isFavorite:"isFavorite"},outputs:{removeFromFavorites:"removeFromFavorites",viewPokemon:"viewPokemon"},decls:10,vars:11,consts:[[3,"routerLink"],[3,"click"],[1,"image-container"],[3,"src","alt"],[1,"data"],["class","remove-from-favorites-container",3,"click",4,"ngIf"],[1,"remove-from-favorites-container",3,"click"],[1,"bx","bxs-star"]],template:function(o,t){1&o&&(e.TgZ(0,"a",0)(1,"div",1),e.NdJ("click",function(){return t.view()}),e.TgZ(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"div",4),e.YNc(5,f,2,0,"div",5),e.TgZ(6,"h4"),e._uU(7),e.qZA(),e.TgZ(8,"p"),e._uU(9),e.qZA()()()()),2&o&&(e.Q6J("routerLink",e.VKq(9,u,t.pokemon.id)),e.xp6(1),e.Gre("card-history-container card-color ",t.pokemon.types[0].type.name,""),e.xp6(2),e.Q6J("src",t.getSprite(),e.LSH)("alt",t.pokemon.name),e.xp6(2),e.Q6J("ngIf",t.isFavorite),e.xp6(2),e.Oqu(t.pokemon.name),e.xp6(2),e.hij("#",t.pokemon.id,""))},dependencies:[d.O5,p.yS],styles:["a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.card-history-container[_ngcontent-%COMP%]{height:200px;position:relative;box-shadow:0 0 10px #0003,0 3px 6px #0000004d;border-radius:10px;display:grid;grid-template-columns:3fr 2fr;overflow:hidden;transition:.2s}.card-history-container[_ngcontent-%COMP%]:hover{cursor:pointer;box-shadow:0 0 30px #fff,0 3px 6px #fff;transform:scale(1.05)}.card-history-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{z-index:20;height:200px}.card-history-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.card-history-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.card-history-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.card-history-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .remove-from-favorites-container[_ngcontent-%COMP%]{position:absolute;top:0;right:0;margin:10px 10px 0 0}.card-history-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .remove-from-favorites-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2rem;color:#ff0}.card-history-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .remove-from-favorites-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:red;cursor:pointer}@media (max-width: 640px){.card-history-container[_ngcontent-%COMP%]{height:300px;box-shadow:0 0 10px #0003,0 3px 6px #0000004d;border-radius:10px;display:grid;grid-template-columns:1fr;grid-template-rows:2fr 1fr;overflow:hidden}.card-history-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{z-index:20;overflow:hidden}.card-history-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.card-history-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.card-history-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .remove-from-favorites-container[_ngcontent-%COMP%]{position:absolute;top:0;right:0;margin:0;padding:0 0 10px 10px;border-radius:0 0 0 10px;z-index:50;background-color:#00008b}.card-history-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .remove-from-favorites-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2rem;color:#ff0}.card-history-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .remove-from-favorites-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:red;cursor:pointer}}"]}),n})();var s=c(2382),_=c(974);let v=(()=>{class n{constructor(){}savePokemon(o){let t=this.getHistory();t.push(o),this.save("history",t)}init(){this.getHistory()||this.cleanCollection("history"),this.getFavorites||this.cleanCollection("favorites")}saveFavorites(o){this.save("favorites",o)}getHistory(){return this.get("history")}getFavorites(){return this.get("favorites")}cleanCollection(o){localStorage.setItem(o,JSON.stringify([]))}save(o,t){localStorage.setItem(o,JSON.stringify(t))}get(o){var t;return JSON.parse(null!==(t=localStorage.getItem(o))&&void 0!==t?t:JSON.stringify([]))}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function C(n,i){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const o=i.$implicit;e.Gre("type--badge card-color ",o.type.name,""),e.xp6(1),e.Oqu(o.type.name)}}const P=function(n){return["/pokemon-profile",n]};let h=(()=>{class n{constructor(){this.pokemon=new m.b,this.addToFavorites=new e.vpe}getSprite(){var o,t,r,a;return null==(null===(t=null===(o=this.pokemon.sprites)||void 0===o?void 0:o.other)||void 0===t?void 0:t.dream_world.front_default)?"":null===(a=null===(r=this.pokemon.sprites)||void 0===r?void 0:r.other)||void 0===a?void 0:a.dream_world.front_default}add(){this.addToFavorites.emit(this.pokemon)}getHeight(){return this.pokemon.height?this.pokemon.height/10:""}getWeight(){return this.pokemon.weight?this.pokemon.weight/10:0}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-card"]],inputs:{pokemon:"pokemon",type:"type"},outputs:{addToFavorites:"addToFavorites"},decls:21,vars:13,consts:[["Z",""],[1,"card-header"],[1,"card--id"],[3,"class",4,"ngFor","ngForOf"],[1,"favorite-icon"],[1,"bx","bxs-star",3,"click"],[3,"routerLink"],[1,"card--image",3,"src","alt"],[1,"card--name"],[1,"card--details"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.qZA(),e.TgZ(4,"div"),e.YNc(5,C,2,4,"span",3),e.qZA(),e.TgZ(6,"div",4)(7,"i",5),e.NdJ("click",function(){return t.add()}),e.qZA()()(),e.TgZ(8,"a",6),e._UZ(9,"img",7),e.TgZ(10,"h1",8),e._uU(11),e.qZA(),e.TgZ(12,"div",9)(13,"span")(14,"strong"),e._uU(15,"Height:"),e.qZA(),e._uU(16),e.qZA(),e.TgZ(17,"span")(18,"strong"),e._uU(19,"Weight:"),e.qZA(),e._uU(20),e.qZA()()()()),2&o&&(e.Gre("card type-background ",t.type,""),e.xp6(3),e.hij("#",t.pokemon.id,""),e.xp6(2),e.Q6J("ngForOf",t.pokemon.types),e.xp6(3),e.Q6J("routerLink",e.VKq(11,P,t.pokemon.id)),e.xp6(1),e.Q6J("src",t.getSprite(),e.LSH)("alt",t.pokemon.name),e.xp6(2),e.Oqu(t.pokemon.name),e.xp6(5),e.hij(" ",t.getHeight(),"m "),e.xp6(4),e.hij(" ",t.getWeight(),"kg "))},dependencies:[d.sg,p.yS],styles:["a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.card[_ngcontent-%COMP%]{z-index:60;width:80%;margin:0 auto;padding:1.8rem;border-radius:20px;text-align:center;box-shadow:0 0 30px #0003,0 3px 6px #0000004d;position:relative;overflow:hidden;cursor:pointer;transition:.2s ease-in-out all}.card[_ngcontent-%COMP%]:hover{box-shadow:0 0 30px #fff6f633,0 3px 6px #ffffff4d}.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card--id[_ngcontent-%COMP%]{width:3rem;padding:.5rem;font-size:1.5rem;font-weight:700;border-radius:0 0 10px;top:0;left:0}.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .favorite-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:.2s;font-size:2rem}.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .favorite-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#023085;-webkit-text-stroke-width:1px;-webkit-text-stroke-color:rgb(2,48,133);transform:rotate(270deg)}.card--name[_ngcontent-%COMP%]{text-transform:capitalize;font-size:2rem;font-weight:700;margin-bottom:10px}.card--image[_ngcontent-%COMP%]{width:200px;display:block;margin:auto}.card--details[_ngcontent-%COMP%]{font-size:1rem;display:flex;justify-content:space-between}.type--badge[_ngcontent-%COMP%]{border:none;border-radius:15px;padding:1px 20px;margin-right:10px;font-size:.7rem;font-weight:600;display:inline-flex;align-items:center;text-align:center}"]}),n})();function O(n,i){if(1&n){const o=e.EpF();e.TgZ(0,"pokemon-card",18),e.NdJ("removeFromFavorites",function(r){e.CHM(o);const a=e.oxw();return e.KtG(a.removeFromFavorites(r))})("viewPokemon",function(r){e.CHM(o);const a=e.oxw();return e.KtG(a.viewPokemon(r))}),e.qZA()}2&n&&e.Q6J("pokemon",i.$implicit)("isFavorite",!0)}function x(n,i){if(1&n){const o=e.EpF();e.TgZ(0,"pokemon-card",19),e.NdJ("viewPokemon",function(r){e.CHM(o);const a=e.oxw();return e.KtG(a.viewPokemon(r))}),e.qZA()}2&n&&e.Q6J("pokemon",i.$implicit)}const M=[{path:"",component:(()=>{class n{constructor(o,t,r){this.service=o,this.formBuilder=t,this.storage=r,this.title="pokedex",this.pokemonName="",this.history=[],this.favorites=[],this.historyIsCleanable=!0,this.FavoritesIsCleanable=!0,this.pokemon=new m.b,this.pokemonForm=this.formBuilder.group({pokemonName:["",[s.kI.required,s.kI.maxLength(10)]]})}ngOnInit(){this.storage.init(),this.history=this.storage.getHistory(),this.favorites=this.storage.getFavorites(),this.service=this.service,this.service.find("arceus").subscribe({next:o=>{this.pokemon=o,console.log(o)},error:o=>{console.log(o)}})}onSubmit(){this.service.find(this.pokemonForm.value.pokemonName.toLowerCase().trim().replace(",","").replace("#","")).subscribe({next:o=>{this.pokemon=o,this.addToHistory(this.pokemon),console.log(o)},error:o=>{console.log(o)}}),console.log("Ok:"+this.pokemonName)}addToHistory(o){for(let t of this.history)if(t.id==o.id)return;this.historyIsCleanable=!1,this.history.push(o),this.storage.savePokemon(o)}addToFavorites(o){console.log("Adicionaod aos favoritos: "+o.name);for(let t of this.favorites)if(t.id==o.id)return;this.FavoritesIsCleanable=!1,this.favorites.length<10&&(this.favorites.push(o),this.storage.saveFavorites(this.favorites))}removeFromFavorites(o){console.log("removido dos favoritos: "+o.name),this.favorites=this.favorites.filter(t=>t.id!=o.id),this.storage.saveFavorites(this.favorites)}viewPokemon(o){this.pokemon=o}cleanHistory(){confirm("Tem certeza que deseja apagar o hist\xf3rico?")&&(this.storage.cleanCollection("history"),this.history=this.storage.getHistory(),this.historyIsCleanable=!0)}cleanFavorites(){confirm("Tem certeza que deseja apagar os favoritos?")&&(this.storage.cleanCollection("favorites"),this.favorites=this.storage.getFavorites(),this.FavoritesIsCleanable=!0)}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(_.h),e.Y36(s.qu),e.Y36(v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["dashboard"]],decls:31,vars:7,consts:[[1,"img-bg-gradient"],[1,"img-bg-image"],[1,"search-container"],[3,"formGroup","ngSubmit"],["type","text","name","","id","","formControlName","pokemonName","required",""],["type","submit",1,"button"],[1,"bx","bx-search-alt"],["id","content"],[3,"pokemon","type","addToFavorites"],[1,"favoritos"],[1,"favoritos-wrapper"],[3,"pokemon","isFavorite","removeFromFavorites","viewPokemon",4,"ngFor","ngForOf"],[1,"history"],[1,"history-wrapper"],[3,"pokemon","viewPokemon",4,"ngFor","ngForOf"],[1,"options-section"],[1,"options"],[3,"disabled","click"],[3,"pokemon","isFavorite","removeFromFavorites","viewPokemon"],[3,"pokemon","viewPokemon"]],template:function(o,t){1&o&&(e._UZ(0,"div",0)(1,"div",1),e.TgZ(2,"header")(3,"h1"),e._uU(4,"Pokedex"),e.qZA()(),e.TgZ(5,"section",2)(6,"form",3),e.NdJ("ngSubmit",function(){return t.onSubmit()}),e._UZ(7,"input",4),e.TgZ(8,"button",5),e._UZ(9,"i",6),e.qZA()()(),e.TgZ(10,"section",7)(11,"app-card",8),e.NdJ("addToFavorites",function(a){return t.addToFavorites(a)}),e.qZA()(),e.TgZ(12,"section",9)(13,"h2"),e._uU(14,"Favoritos"),e.qZA(),e.TgZ(15,"div",10),e.YNc(16,O,1,2,"pokemon-card",11),e.qZA()(),e.TgZ(17,"section",12)(18,"h2"),e._uU(19,"Host\xf3rico de busca"),e.qZA(),e.TgZ(20,"div",13),e.YNc(21,x,1,1,"pokemon-card",14),e.qZA()(),e.TgZ(22,"section",15)(23,"div",16)(24,"h4"),e._uU(25,"Ferramentas"),e.qZA(),e.TgZ(26,"div")(27,"button",17),e.NdJ("click",function(){return t.cleanHistory()}),e._uU(28,"Limpar Hist\xf3rico"),e.qZA(),e.TgZ(29,"button",17),e.NdJ("click",function(){return t.cleanFavorites()}),e._uU(30,"Limpar Favoritos"),e.qZA()()()()),2&o&&(e.xp6(6),e.Q6J("formGroup",t.pokemonForm),e.xp6(5),e.Q6J("pokemon",t.pokemon)("type",t.pokemon.types[0].type.name),e.xp6(5),e.Q6J("ngForOf",t.favorites),e.xp6(5),e.Q6J("ngForOf",t.history),e.xp6(6),e.Q6J("disabled",t.historyIsCleanable),e.xp6(2),e.Q6J("disabled",t.FavoritesIsCleanable))},dependencies:[d.sg,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.sg,s.u,h,l],styles:["header[_ngcontent-%COMP%]{display:flex;height:clamp(20vh,30%,45vh);justify-content:center;align-items:flex-end;position:relative;margin-bottom:1%;z-index:20}header[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:clamp(3rem,20vw,7rem);color:#0e2031;text-transform:capitalize;position:relative;text-shadow:10px 10px 0 #0e2031;-webkit-text-stroke-width:3px;-webkit-text-stroke-color:#0e2031;color:#a2ebf1}#content[_ngcontent-%COMP%]{padding:1rem;max-width:1100px;margin:auto}#app[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(12rem,1fr));grid-gap:1.5rem;justify-content:center;align-items:center}.search-container[_ngcontent-%COMP%]{z-index:200;width:50%;margin:0 auto;overflow:hidden}.search-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:grid;grid-template-columns:4fr 1fr;z-index:200}.search-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .search-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:201}.search-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid #0e2031;border-right:none;font-size:18px;padding:10px;border-radius:10px 0 0 10px}.search-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#1c8de3;padding:10px;font-size:16px;border-radius:0 10px 10px 0;border:1px solid #0e2031;border-left:none}.search-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#157ad9;cursor:pointer}@media (max-width: 600px){.search-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:90%;grid-template-columns:2fr 1fr}.search-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:20px}}main[_ngcontent-%COMP%]{line-height:1.5;height:100vh;width:100%;padding:0;margin:0}.favoritos[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:80px auto 20px;text-align:center;color:#0e2031}.favoritos[_ngcontent-%COMP%]   .favoritos-wrapper[_ngcontent-%COMP%]{width:80%;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:15px}@media (max-width: 600px){.favoritos[_ngcontent-%COMP%]   .favoritos-wrapper[_ngcontent-%COMP%]{width:95%;grid-template-columns:1fr 1fr}}.history[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:80px auto 20px;text-align:center;color:#0e2031}.history[_ngcontent-%COMP%]   .history-wrapper[_ngcontent-%COMP%]{width:80%;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:15px}@media (max-width: 600px){.history[_ngcontent-%COMP%]   .history-wrapper[_ngcontent-%COMP%]{width:95%;grid-template-columns:1fr 1fr}}.options-section[_ngcontent-%COMP%]{padding-bottom:100px}.options-section[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{width:50%;margin:30px auto;border-radius:10px;height:180px;border:1px solid #0e2031;display:flex;justify-content:center;flex-direction:column}.options-section[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;color:#0e2031;margin-bottom:30px}.options-section[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly}.options-section[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#88b2d1;height:20px;padding:15px;font-size:15px;border-radius:10px;border:none;height:100%}.options-section[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#9dbcda;cursor:pointer}"]}),n})()}];let k=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild(M),p.Bz]}),n})();var b=c(520);let y=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,k,s.u5,s.UX,b.JF]}),n})()}}]);