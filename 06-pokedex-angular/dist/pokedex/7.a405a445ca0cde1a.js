"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[7],{1007:(w,m,c)=>{c.r(m),c.d(m,{DashboardModule:()=>b});var g=c(103),e=c(1223),d=c(9808),p=c(8845);function _(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",6),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.remove())}),e._UZ(1,"i",7),e.qZA()}}const u=function(o){return["/pokemon-profile",o]};let l=(()=>{class o{constructor(){this.pokemon=new g.b,this.isFavorite=!1,this.removeFromFavorites=new e.vpe,this.viewPokemon=new e.vpe}ngOnInit(){}getSprite(){var t,n,r,a;return null==(null===(n=null===(t=this.pokemon.sprites)||void 0===t?void 0:t.other)||void 0===n?void 0:n.dream_world.front_default)?"":null===(a=null===(r=this.pokemon.sprites)||void 0===r?void 0:r.other)||void 0===a?void 0:a.dream_world.front_default}remove(){this.removeFromFavorites.emit(this.pokemon)}view(){this.viewPokemon.emit(this.pokemon)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["pokemon-card"]],inputs:{pokemon:"pokemon",isFavorite:"isFavorite"},outputs:{removeFromFavorites:"removeFromFavorites",viewPokemon:"viewPokemon"},decls:10,vars:11,consts:[[3,"click"],["class","remove-from-favorites-container",3,"click",4,"ngIf"],[3,"routerLink"],[1,"image-container"],[3,"src","alt"],[1,"data"],[1,"remove-from-favorites-container",3,"click"],[1,"bx","bxs-star"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return n.view()}),e.YNc(1,_,2,0,"div",1),e.TgZ(2,"a",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5)(6,"h4"),e._uU(7),e.qZA(),e.TgZ(8,"p"),e._uU(9),e.qZA()()()()),2&t&&(e.Gre("card-history-container card-styled pokemon-card-styled-colored ",n.pokemon.types[0].type.name,""),e.xp6(1),e.Q6J("ngIf",n.isFavorite),e.xp6(1),e.Q6J("routerLink",e.VKq(9,u,n.pokemon.id)),e.xp6(2),e.Q6J("src",n.getSprite(),e.LSH)("alt",n.pokemon.name),e.xp6(3),e.Oqu(n.pokemon.name),e.xp6(2),e.hij("#",n.pokemon.id,""))},dependencies:[d.O5,p.yS],styles:["a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.card-history-container[_ngcontent-%COMP%]{height:120px;position:relative;border-radius:10px;display:grid;grid-template-columns:1fr;grid-template-rows:1fr 2fr;transition:.2s}.card-history-container[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(1.05)}.card-history-container[_ngcontent-%COMP%]   .remove-from-favorites-container[_ngcontent-%COMP%]{position:absolute;top:0;right:0;margin:10px 10px 0 0}.card-history-container[_ngcontent-%COMP%]   .remove-from-favorites-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2rem;color:#ff0}.card-history-container[_ngcontent-%COMP%]   .remove-from-favorites-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:red;cursor:pointer}.card-history-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:1fr 1fr}.card-history-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{z-index:20;height:100px;margin:-50px auto 0}.card-history-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.card-history-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.card-history-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}@media (max-width: 640px){.card-history-container[_ngcontent-%COMP%]{height:180px;border-radius:10px;display:grid;grid-template-columns:1fr;grid-template-rows:2fr 1fr}.card-history-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:1fr 1fr}.card-history-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{z-index:20;height:100px;margin:-60px auto 0}.card-history-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.card-history-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.card-history-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.card-history-container[_ngcontent-%COMP%]   .remove-from-favorites-container[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;top:unset;margin:0;height:50px;padding:10px 10px 0;border-radius:10px 0;z-index:50;background-color:#d5d5f8}.card-history-container[_ngcontent-%COMP%]   .remove-from-favorites-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2rem;color:#ff0}.card-history-container[_ngcontent-%COMP%]   .remove-from-favorites-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:red;cursor:pointer}}"]}),o})();var s=c(2382),f=c(974);let C=(()=>{class o{constructor(){}savePokemon(t){let n=this.getHistory();n.push(t),this.save("history",n)}init(){this.getHistory()||this.cleanCollection("history"),this.getFavorites||this.cleanCollection("favorites")}saveFavorites(t){this.save("favorites",t)}getHistory(){return this.get("history")}getFavorites(){return this.get("favorites")}cleanCollection(t){localStorage.setItem(t,JSON.stringify([]))}save(t,n){localStorage.setItem(t,JSON.stringify(n))}get(t){var n;return JSON.parse(null!==(n=localStorage.getItem(t))&&void 0!==n?n:JSON.stringify([]))}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function v(o,i){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.Gre("type--badge card-color ",t.type.name,""),e.xp6(1),e.Oqu(t.type.name)}}const P=function(o){return["/pokemon-profile",o]};let h=(()=>{class o{constructor(){this.pokemon=new g.b,this.addToFavorites=new e.vpe}getSprite(){var t,n,r,a;return null==(null===(n=null===(t=this.pokemon.sprites)||void 0===t?void 0:t.other)||void 0===n?void 0:n.dream_world.front_default)?"":null===(a=null===(r=this.pokemon.sprites)||void 0===r?void 0:r.other)||void 0===a?void 0:a.dream_world.front_default}add(){this.addToFavorites.emit(this.pokemon)}getHeight(){return this.pokemon.height?this.pokemon.height/10:""}getWeight(){return this.pokemon.weight?this.pokemon.weight/10:0}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-card"]],inputs:{pokemon:"pokemon",type:"type"},outputs:{addToFavorites:"addToFavorites"},decls:21,vars:13,consts:[["Z",""],[1,"card-header"],[1,"card--id"],[3,"class",4,"ngFor","ngForOf"],[1,"favorite-icon"],[1,"bx","bxs-star",3,"click"],[3,"routerLink"],[1,"card--image",3,"src","alt"],[1,"card--name"],[1,"card--details"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.qZA(),e.TgZ(4,"div"),e.YNc(5,v,2,4,"span",3),e.qZA(),e.TgZ(6,"div",4)(7,"i",5),e.NdJ("click",function(){return n.add()}),e.qZA()()(),e.TgZ(8,"a",6),e._UZ(9,"img",7),e.TgZ(10,"h1",8),e._uU(11),e.qZA(),e.TgZ(12,"div",9)(13,"span")(14,"strong"),e._uU(15,"Height:"),e.qZA(),e._uU(16),e.qZA(),e.TgZ(17,"span")(18,"strong"),e._uU(19,"Weight:"),e.qZA(),e._uU(20),e.qZA()()()()),2&t&&(e.Gre("card type-background ",n.type,""),e.xp6(3),e.hij("#",n.pokemon.id,""),e.xp6(2),e.Q6J("ngForOf",n.pokemon.types),e.xp6(3),e.Q6J("routerLink",e.VKq(11,P,n.pokemon.id)),e.xp6(1),e.Q6J("src",n.getSprite(),e.LSH)("alt",n.pokemon.name),e.xp6(2),e.Oqu(n.pokemon.name),e.xp6(5),e.hij(" ",n.getHeight(),"m "),e.xp6(4),e.hij(" ",n.getWeight(),"kg "))},dependencies:[d.sg,p.yS],styles:["a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.card[_ngcontent-%COMP%]{z-index:60;width:80%;margin:0 auto;padding:1.8rem;border-radius:20px;text-align:center;position:relative;overflow:hidden;cursor:pointer;transition:.2s ease-in-out all}.card[_ngcontent-%COMP%]:hover{filter:brightness(1.2)}.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card--id[_ngcontent-%COMP%]{width:3rem;padding:.5rem;font-size:1.5rem;font-weight:700;border-radius:0 0 10px;top:0;left:0}.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .favorite-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:.2s;font-size:2rem}.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .favorite-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#023085;-webkit-text-stroke-width:1px;-webkit-text-stroke-color:rgb(2,48,133);transform:rotate(270deg)}.card--name[_ngcontent-%COMP%]{text-transform:capitalize;font-size:2rem;font-weight:700;margin-bottom:10px}.card--image[_ngcontent-%COMP%]{width:200px;display:block;margin:auto}.card--details[_ngcontent-%COMP%]{font-size:1rem;display:flex;justify-content:space-between}.type--badge[_ngcontent-%COMP%]{border:none;border-radius:15px;padding:1px 20px;margin-right:10px;font-size:.7rem;font-weight:600;display:inline-flex;align-items:center;text-align:center}"]}),o})();function O(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"pokemon-card",18),e.NdJ("removeFromFavorites",function(r){e.CHM(t);const a=e.oxw();return e.KtG(a.removeFromFavorites(r))})("viewPokemon",function(r){e.CHM(t);const a=e.oxw();return e.KtG(a.viewPokemon(r))}),e.qZA()}2&o&&e.Q6J("pokemon",i.$implicit)("isFavorite",!0)}function M(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"pokemon-card",19),e.NdJ("viewPokemon",function(r){e.CHM(t);const a=e.oxw();return e.KtG(a.viewPokemon(r))}),e.qZA()}2&o&&e.Q6J("pokemon",i.$implicit)}const x=[{path:"",component:(()=>{class o{constructor(t,n,r){this.service=t,this.formBuilder=n,this.storage=r,this.title="pokedex",this.pokemonName="",this.history=[],this.favorites=[],this.historyIsCleanable=!0,this.FavoritesIsCleanable=!0,this.pokemon=new g.b,this.pokemonForm=this.formBuilder.group({pokemonName:["",[s.kI.required,s.kI.maxLength(10)]]})}ngOnInit(){this.storage.init(),this.history=this.storage.getHistory(),this.favorites=this.storage.getFavorites(),this.history.length>0&&(this.historyIsCleanable=!1),this.favorites.length>0&&(this.FavoritesIsCleanable=!1),this.service=this.service,this.service.find("arceus").subscribe({next:t=>{this.pokemon=t,console.log(t)},error:t=>{console.log(t)}})}keyPressAlphaNumeric(t){var n=String.fromCharCode(t.keyCode);return!!/[a-zA-Z0-9\n]/.test(n)||(t.preventDefault(),!1)}keyPressEnter(t){if(13==t.keyCode)return this.onSubmit(),!0}onSubmit(){this.service.find(this.pokemonForm.value.pokemonName.toLowerCase().trim().replace(",","").replace("#","")).subscribe({next:t=>{this.pokemon=t,this.addToHistory(this.pokemon),console.log(t)},error:t=>{console.log(t)}}),console.log("Ok:"+this.pokemonName)}addToHistory(t){for(let n of this.history)if(n.id==t.id)return;this.historyIsCleanable=!1,this.history.push(t),this.storage.savePokemon(t)}addToFavorites(t){console.log("Adicionaod aos favoritos: "+t.name);for(let n of this.favorites)if(n.id==t.id)return;this.FavoritesIsCleanable=!1,this.favorites.length<10&&(this.favorites.push(t),this.storage.saveFavorites(this.favorites))}removeFromFavorites(t){console.log("removido dos favoritos: "+t.name),this.favorites=this.favorites.filter(n=>n.id!=t.id),this.storage.saveFavorites(this.favorites)}viewPokemon(t){this.pokemon=t}cleanHistory(){confirm("Tem certeza que deseja apagar o hist\xf3rico?")&&(this.storage.cleanCollection("history"),this.history=this.storage.getHistory(),this.historyIsCleanable=!0)}cleanFavorites(){confirm("Tem certeza que deseja apagar os favoritos?")&&(this.storage.cleanCollection("favorites"),this.favorites=this.storage.getFavorites(),this.FavoritesIsCleanable=!0)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.h),e.Y36(s.qu),e.Y36(C))},o.\u0275cmp=e.Xpm({type:o,selectors:[["dashboard"]],decls:31,vars:10,consts:[[1,"img-bg-gradient"],[1,"img-bg-image"],[1,"search-container"],[3,"formGroup","ngSubmit","keypress"],["type","text","name","","id","","formControlName","pokemonName","required","",3,"keypress"],["type","submit",1,"button"],[1,"bx","bx-search-alt"],["id","content"],[3,"pokemon","type","addToFavorites"],[1,"favoritos"],[1,"favoritos-wrapper"],[3,"pokemon","isFavorite","removeFromFavorites","viewPokemon",4,"ngFor","ngForOf"],[1,"history"],[1,"history-wrapper"],[3,"pokemon","viewPokemon",4,"ngFor","ngForOf"],[1,"options-section"],[1,"options"],[3,"disabled","click"],[3,"pokemon","isFavorite","removeFromFavorites","viewPokemon"],[3,"pokemon","viewPokemon"]],template:function(t,n){1&t&&(e._UZ(0,"div",0)(1,"div",1),e.TgZ(2,"header")(3,"h1"),e._uU(4,"Pokedex"),e.qZA()(),e.TgZ(5,"section",2)(6,"form",3),e.NdJ("ngSubmit",function(){return n.onSubmit()})("keypress",function(a){return n.keyPressEnter(a)}),e.TgZ(7,"input",4),e.NdJ("keypress",function(a){return n.keyPressAlphaNumeric(a)}),e.qZA(),e.TgZ(8,"button",5),e._UZ(9,"i",6),e.qZA()()(),e.TgZ(10,"section",7)(11,"app-card",8),e.NdJ("addToFavorites",function(a){return n.addToFavorites(a)}),e.qZA()(),e.TgZ(12,"section",9)(13,"h2"),e._uU(14,"Favoritos"),e.qZA(),e.TgZ(15,"div",10),e.YNc(16,O,1,2,"pokemon-card",11),e.qZA()(),e.TgZ(17,"section",12)(18,"h2"),e._uU(19,"Host\xf3rico de busca"),e.qZA(),e.TgZ(20,"div",13),e.YNc(21,M,1,1,"pokemon-card",14),e.qZA()(),e.TgZ(22,"section",15)(23,"div",16)(24,"h4"),e._uU(25,"Ferramentas"),e.qZA(),e.TgZ(26,"div")(27,"button",17),e.NdJ("click",function(){return n.cleanHistory()}),e._uU(28,"Limpar Hist\xf3rico"),e.qZA(),e.TgZ(29,"button",17),e.NdJ("click",function(){return n.cleanFavorites()}),e._uU(30,"Limpar Favoritos"),e.qZA()()()()),2&t&&(e.xp6(3),e.Gre("text-type-color ",n.pokemon.types[0].type.name,""),e.xp6(3),e.Q6J("formGroup",n.pokemonForm),e.xp6(5),e.Q6J("pokemon",n.pokemon)("type",n.pokemon.types[0].type.name),e.xp6(5),e.Q6J("ngForOf",n.favorites),e.xp6(5),e.Q6J("ngForOf",n.history),e.xp6(6),e.Q6J("disabled",n.historyIsCleanable),e.xp6(2),e.Q6J("disabled",n.FavoritesIsCleanable))},dependencies:[d.sg,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.sg,s.u,h,l],styles:["header[_ngcontent-%COMP%]{display:flex;height:clamp(20vh,30%,45vh);justify-content:center;align-items:flex-end;position:relative;margin-bottom:1%;z-index:20}header[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:clamp(3rem,20vw,7rem);text-transform:capitalize;position:relative;text-shadow:0px 4px 8px var(--bg),0 0 0 #000,0px 4px 4px var(--bg)}#content[_ngcontent-%COMP%]{padding:1rem;max-width:1100px;margin:auto}#app[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(12rem,1fr));grid-gap:1.5rem;justify-content:center;align-items:center}.search-container[_ngcontent-%COMP%]{z-index:200;width:50%;margin:0 auto;overflow:hidden}.search-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:grid;grid-template-columns:4fr 1fr;z-index:200}.search-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .search-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:201}.search-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid #0e2031;border-right:none;font-size:18px;padding:10px;border-radius:10px 0 0 10px}.search-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#1c8de3;padding:10px;font-size:16px;border-radius:0 10px 10px 0;border:1px solid #0e2031;border-left:none}.search-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#157ad9;cursor:pointer}@media (max-width: 640px){.search-container[_ngcontent-%COMP%]{z-index:200;width:85%;margin:0 auto}.search-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:row;grid-template-columns:unset;z-index:200}.search-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .search-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:200}.search-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid #0e2031;border-right:none;font-size:18px;width:90%;border-radius:10px 0 0 10px}.search-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#1c8de3;font-size:16px;border-radius:0 10px 10px 0;border:1px solid #0e2031;border-left:none}.search-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#157ad9;cursor:pointer}}main[_ngcontent-%COMP%]{line-height:1.5;height:100vh;width:100%;padding:0;margin:0}.favoritos[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:80px auto 100px;text-align:center;color:#0e2031}.favoritos[_ngcontent-%COMP%]   .favoritos-wrapper[_ngcontent-%COMP%]{width:80%;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));grid-row-gap:120px;grid-column-gap:30px}@media (max-width: 600px){.favoritos[_ngcontent-%COMP%]   .favoritos-wrapper[_ngcontent-%COMP%]{width:95%;grid-template-columns:1fr 1fr}}.history[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:80px auto 120px;text-align:center;color:#0e2031}.history[_ngcontent-%COMP%]   .history-wrapper[_ngcontent-%COMP%]{width:80%;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));grid-row-gap:120px;grid-column-gap:30px}@media (max-width: 600px){.history[_ngcontent-%COMP%]   .history-wrapper[_ngcontent-%COMP%]{width:95%;grid-template-columns:1fr 1fr}}.options-section[_ngcontent-%COMP%]{padding-bottom:100px}.options-section[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{width:50%;margin:30px auto;border-radius:10px;height:180px;border:1px solid rgba(167,189,209,.2980392157);padding:20px;display:flex;justify-content:center;flex-direction:column}.options-section[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;color:#0e2031;margin-bottom:30px}.options-section[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly;flex-wrap:wrap}.options-section[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:var(--accent-blue);padding:.7em 1.7em;font-size:18px;border-radius:.5em;background:var(--bg);border:1px solid #e8e8e8;transition:all .3s;box-shadow:6px 6px 12px var(--shadow-over-bg),-6px -6px 12px #ffffff61}.options-section[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{box-shadow:4px 4px 12px #c5c5c5,-4px -4px 12px #fff;cursor:pointer}.options-section[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{cursor:not-allowed;border:none;box-shadow:none}.options-section[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]:hover{cursor:not-allowed}@media (max-width: 640px){.options-section[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{width:80%}.options-section[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:20px}}"]}),o})()}];let k=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.Bz.forChild(x),p.Bz]}),o})();var y=c(520);let b=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.ez,k,s.u5,s.UX,y.JF]}),o})()}}]);