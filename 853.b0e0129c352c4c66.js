"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[853],{3853:(u,g,i)=>{i.r(g),i.d(g,{PokemonProfileModule:()=>f});var l=i(9808);class s{constructor(){this.flavor_text_entries=[]}}var P=i(103),n=i(1223),a=i(8845),d=i(974);function _(t,c){if(1&t&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&t){const e=c.$implicit;n.Gre("type--badge card-color ",e.type.name,""),n.xp6(1),n.Oqu(e.type.name)}}function O(t,c){if(1&t&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&t){const e=c.$implicit;n.xp6(1),n.Oqu(e.ability.name)}}function C(t,c){if(1&t&&(n.TgZ(0,"div",16)(1,"div"),n._uU(2),n.qZA(),n.TgZ(3,"div",17),n._uU(4),n.qZA()()),2&t){const e=c.$implicit;n.xp6(1),n.Gre("param chip-color ",e.stat.name,""),n.xp6(1),n.hij(" ",e.stat.name," "),n.xp6(2),n.hij(" ",e.base_stat," ")}}const M=[{path:"",component:(()=>{class t{constructor(e,o,r){this.router=e,this.route=o,this.service=r,this.pokemon=new P.b,this.specie=new s,this.pokemonId=""}ngOnInit(){var e;this.pokemonId=null!==(e=this.route.snapshot.paramMap.get("id"))&&void 0!==e?e:"",this.service.find(this.pokemonId.replace("#","")).subscribe({next:o=>{this.pokemon=o,console.log(o)},error:o=>{console.log(o)}}),this.service.getSpecie(this.pokemonId.replace("#","")).subscribe({next:o=>{this.specie=o,console.log(o)},error:o=>{console.log(o)}})}getSprite(){var e,o,r,p;return null==(null===(o=null===(e=this.pokemon.sprites)||void 0===e?void 0:e.other)||void 0===o?void 0:o.dream_world.front_default)?"":null===(p=null===(r=this.pokemon.sprites)||void 0===r?void 0:r.other)||void 0===p?void 0:p.dream_world.front_default}getHeight(){return this.pokemon.height?this.pokemon.height/10:""}getWeight(){return this.pokemon.weight?this.pokemon.weight/10:0}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(a.F0),n.Y36(a.gz),n.Y36(d.h))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-pokemon-profile"]],decls:44,vars:11,consts:[[1,"pokemon-profile-container"],[1,"central-container"],[1,"pokemon-img-container"],[3,"src","alt"],[1,"content-container"],[1,"text-data"],[1,"poke-id"],[1,"types-container"],[3,"class",4,"ngFor","ngForOf"],[1,"pokedex-entry-container"],[1,"abilities-container"],[4,"ngFor","ngForOf"],[1,"numeric-data-container"],[1,"status-container"],[1,"chip-wrapper"],["class","status-chip ",4,"ngFor","ngForOf"],[1,"status-chip"],[1,"value"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2),n._UZ(3,"img",3),n.qZA(),n.TgZ(4,"div",4)(5,"div",5)(6,"p",6)(7,"strong"),n._uU(8),n.qZA()(),n.TgZ(9,"h2"),n._uU(10),n.qZA()(),n.TgZ(11,"div",7),n.YNc(12,_,2,4,"span",8),n.qZA(),n.TgZ(13,"div",9)(14,"h3"),n._uU(15,"descri\xe7\xe3o"),n.qZA(),n.TgZ(16,"p"),n._uU(17),n.qZA()(),n.TgZ(18,"div",10)(19,"h3"),n._uU(20,"habilidades"),n.qZA(),n.TgZ(21,"div"),n.YNc(22,O,2,1,"span",11),n.qZA()(),n.TgZ(23,"div",12)(24,"div")(25,"h3"),n._uU(26,"Altura"),n.qZA(),n.TgZ(27,"span"),n._uU(28),n.qZA()(),n.TgZ(29,"div")(30,"h3"),n._uU(31,"Peso"),n.qZA(),n.TgZ(32,"span"),n._uU(33),n.qZA()(),n.TgZ(34,"div")(35,"h3"),n._uU(36,"Base Exp"),n.qZA(),n.TgZ(37,"span"),n._uU(38),n.qZA()()(),n.TgZ(39,"div",13)(40,"h3"),n._uU(41,"status"),n.qZA(),n.TgZ(42,"div",14),n.YNc(43,C,5,5,"div",15),n.qZA()()()()()),2&e&&(n.xp6(3),n.Q6J("src",o.getSprite(),n.LSH)("alt",o.pokemon.name),n.xp6(5),n.hij("#",o.pokemon.id,""),n.xp6(2),n.Oqu(o.pokemon.name),n.xp6(2),n.Q6J("ngForOf",o.pokemon.types),n.xp6(5),n.Oqu(o.specie.flavor_text_entries[1].flavor_text),n.xp6(5),n.Q6J("ngForOf",o.pokemon.abilities),n.xp6(6),n.hij("",o.getHeight(),"m"),n.xp6(5),n.hij("",o.getWeight(),"Kg"),n.xp6(5),n.Oqu(o.pokemon.base_experience),n.xp6(5),n.Q6J("ngForOf",o.pokemon.stats))},dependencies:[l.sg],styles:[".pokemon-profile-container[_ngcontent-%COMP%]{background-color:#e2ecff;font-family:Poppins;height:100%;padding:100px 0}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]{min-width:500px;max-width:50%;margin:0 auto;display:flex;flex-direction:column;align-items:center}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]{height:300px;margin-bottom:-180px;z-index:300}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{padding:200px 0 60px;background-color:#fff;box-shadow:0 0 30px #0003,0 3px 6px #0000004d;border-radius:30px}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#0e2031}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .text-data[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .pokedex-entry-container[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .abilities-container[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .types-container[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .numeric-data-container[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]{margin:30px 0}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .text-data[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .pokedex-entry-container[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .abilities-container[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .text-data[_ngcontent-%COMP%]   p.poke-id[_ngcontent-%COMP%]{color:#bbc4c5;font-weight:700;font-size:1.5rem}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .text-data[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#0e2031;font-size:3rem;font-weight:bolder}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .text-data[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#bbc4c5}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .types-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .types-container[_ngcontent-%COMP%]   .type--badge[_ngcontent-%COMP%]{border:none;border-radius:15px;padding:1px 20px;margin-right:10px;font-size:.7rem;font-weight:600;display:inline-flex;align-items:center;text-align:center}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .pokedex-entry-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-size:.9rem;width:90%}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .abilities-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:90%;display:grid;grid-template-columns:1fr 1fr;grid-gap:20px}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .abilities-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:2px solid #0e2031;border-radius:500px;padding:10px 20px;text-align:center}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .numeric-data-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .numeric-data-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .numeric-data-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:10px 0}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .numeric-data-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#e4edfd;width:50%;padding:10px 20px;border-radius:500px;text-align:center}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .chip-wrapper[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex;justify-content:space-evenly;flex-direction:row;width:80%}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .chip-wrapper[_ngcontent-%COMP%]   .status-chip[_ngcontent-%COMP%]{background-color:#e4edfd;margin:10px;height:35px;border-radius:400px;padding:5px;display:flex;flex-direction:row;align-items:center;justify-content:space-evenly}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .chip-wrapper[_ngcontent-%COMP%]   .status-chip[_ngcontent-%COMP%]   .param[_ngcontent-%COMP%]{border-radius:500px;padding:0 20px;min-width:30px;height:30px;font-weight:700}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .chip-wrapper[_ngcontent-%COMP%]   .status-chip[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{padding:0 20px}"]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[a.Bz.forChild(M),a.Bz]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[l.ez,m]}),t})()}}]);