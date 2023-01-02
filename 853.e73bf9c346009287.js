"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[853],{3853:(u,p,i)=>{i.r(p),i.d(p,{PokemonProfileModule:()=>f});var l=i(9808);class P{constructor(){this.flavor_text_entries=[]}}var _=i(103),n=i(1223),a=i(8845),O=i(974);function C(e,c){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const o=c.$implicit;n.Gre("type--badge card-color ",o.type.name,""),n.xp6(1),n.Oqu(o.type.name)}}function M(e,c){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const o=c.$implicit;n.xp6(1),n.Oqu(o.ability.name)}}function d(e,c){if(1&e&&(n.TgZ(0,"div",15)(1,"div"),n._uU(2),n.qZA(),n.TgZ(3,"div",16),n._uU(4),n.qZA()()),2&e){const o=c.$implicit;n.xp6(1),n.Gre("param chip-color ",o.stat.name,""),n.xp6(1),n.hij(" ",o.stat.name," "),n.xp6(2),n.hij(" ",o.base_stat," ")}}const s=[{path:"",component:(()=>{class e{constructor(o,t,r){this.router=o,this.route=t,this.service=r,this.pokemon=new _.b,this.specie=new P,this.pokemonId=""}ngOnInit(){var o;this.pokemonId=null!==(o=this.route.snapshot.paramMap.get("id"))&&void 0!==o?o:"",this.service.find(this.pokemonId.replace("#","")).subscribe({next:t=>{this.pokemon=t,console.log(t)},error:t=>{console.log(t)}}),this.service.getSpecie(this.pokemonId.replace("#","")).subscribe({next:t=>{this.specie=t,console.log(t)},error:t=>{console.log(t)}}),this.service.getEvolutionChain(this.pokemonId.replace("#","")).subscribe({next:t=>{this.evolutionChain=t,console.log("EVOLUTION"),console.log(t)},error:t=>{console.log(t)}})}getSprite(){var o,t,r,g;return null==(null===(t=null===(o=this.pokemon.sprites)||void 0===o?void 0:o.other)||void 0===t?void 0:t.dream_world.front_default)?"":null===(g=null===(r=this.pokemon.sprites)||void 0===r?void 0:r.other)||void 0===g?void 0:g.dream_world.front_default}getHeight(){return this.pokemon.height?this.pokemon.height/10:""}getWeight(){return this.pokemon.weight?this.pokemon.weight/10:0}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(a.F0),n.Y36(a.gz),n.Y36(O.h))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-pokemon-profile"]],decls:44,vars:14,consts:[[1,"pokemon-profile-container"],[1,"central-container"],[1,"pokemon-img-container"],[3,"src","alt"],[1,"text-data"],[1,"poke-id"],[1,"types-container"],[3,"class",4,"ngFor","ngForOf"],[1,"pokedex-entry-container"],[1,"abilities-container"],[4,"ngFor","ngForOf"],[1,"numeric-data-container"],[1,"status-container"],[1,"chip-wrapper"],["class","status-chip ",4,"ngFor","ngForOf"],[1,"status-chip"],[1,"value"]],template:function(o,t){1&o&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2),n._UZ(3,"img",3),n.qZA(),n.TgZ(4,"div")(5,"div",4)(6,"p",5)(7,"strong"),n._uU(8),n.qZA()(),n.TgZ(9,"h2"),n._uU(10),n.qZA()(),n.TgZ(11,"div",6),n.YNc(12,C,2,4,"span",7),n.qZA(),n.TgZ(13,"div",8)(14,"h3"),n._uU(15,"descri\xe7\xe3o"),n.qZA(),n.TgZ(16,"p"),n._uU(17),n.qZA()(),n.TgZ(18,"div",9)(19,"h3"),n._uU(20,"habilidades"),n.qZA(),n.TgZ(21,"div"),n.YNc(22,M,2,1,"span",10),n.qZA()(),n.TgZ(23,"div",11)(24,"div")(25,"h3"),n._uU(26,"Altura"),n.qZA(),n.TgZ(27,"span"),n._uU(28),n.qZA()(),n.TgZ(29,"div")(30,"h3"),n._uU(31,"Peso"),n.qZA(),n.TgZ(32,"span"),n._uU(33),n.qZA()(),n.TgZ(34,"div")(35,"h3"),n._uU(36,"Base Exp"),n.qZA(),n.TgZ(37,"span"),n._uU(38),n.qZA()()(),n.TgZ(39,"div",12)(40,"h3"),n._uU(41,"status"),n.qZA(),n.TgZ(42,"div",13),n.YNc(43,d,5,5,"div",14),n.qZA()()()()()),2&o&&(n.xp6(3),n.Q6J("src",t.getSprite(),n.LSH)("alt",t.pokemon.name),n.xp6(1),n.Gre("content-container card-styled-colored ",t.pokemon.types[0].type.name,""),n.xp6(4),n.hij("#",t.pokemon.id,""),n.xp6(2),n.Oqu(t.pokemon.name),n.xp6(2),n.Q6J("ngForOf",t.pokemon.types),n.xp6(5),n.Oqu(t.specie.flavor_text_entries[1].flavor_text),n.xp6(5),n.Q6J("ngForOf",t.pokemon.abilities),n.xp6(6),n.hij("",t.getHeight(),"m"),n.xp6(5),n.hij("",t.getWeight(),"Kg"),n.xp6(5),n.Oqu(t.pokemon.base_experience),n.xp6(5),n.Q6J("ngForOf",t.pokemon.stats))},dependencies:[l.sg],styles:[".pokemon-profile-container[_ngcontent-%COMP%]{background-color:var(--bg);font-family:Poppins;height:100%;padding:100px 0}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]{min-width:500px;max-width:50%;margin:0 auto;display:flex;flex-direction:column;align-items:center}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]{height:300px;margin-bottom:-180px;z-index:300}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{padding:200px 0 60px;background-color:#fff;border-radius:30px}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#0e2031}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .text-data[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .pokedex-entry-container[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .abilities-container[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .types-container[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .numeric-data-container[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]{margin:30px 0}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .text-data[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .pokedex-entry-container[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .abilities-container[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .text-data[_ngcontent-%COMP%]   p.poke-id[_ngcontent-%COMP%]{color:#bbc4c5;font-weight:700;font-size:1.5rem}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .text-data[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#0e2031;font-size:3rem;font-weight:bolder}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .text-data[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#bbc4c5}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .types-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .types-container[_ngcontent-%COMP%]   .type--badge[_ngcontent-%COMP%]{border:none;border-radius:15px;padding:1px 20px;margin-right:10px;font-size:.7rem;font-weight:600;display:inline-flex;align-items:center;text-align:center}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .pokedex-entry-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-size:.9rem;width:90%}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .abilities-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:90%;display:grid;grid-template-columns:1fr 1fr;grid-gap:20px}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .abilities-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:2px solid #0e2031;border-radius:500px;padding:10px 20px;text-align:center}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .numeric-data-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .numeric-data-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .numeric-data-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:10px 0}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .numeric-data-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#e4edfd;width:50%;padding:10px 20px;border-radius:500px;text-align:center}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .chip-wrapper[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex;justify-content:space-evenly;flex-direction:row;width:95%}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .chip-wrapper[_ngcontent-%COMP%]   .status-chip[_ngcontent-%COMP%]{background-color:#e4edfd;margin:10px;height:35px;border-radius:400px;padding:5px;display:flex;flex-direction:row;align-items:center;justify-content:space-evenly}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .chip-wrapper[_ngcontent-%COMP%]   .status-chip[_ngcontent-%COMP%]   .param[_ngcontent-%COMP%]{border-radius:500px;padding:0 20px;min-width:30px;height:30px;font-weight:700}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .chip-wrapper[_ngcontent-%COMP%]   .status-chip[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{padding:0 20px}@media (max-width: 640px){.pokemon-profile-container[_ngcontent-%COMP%]{background-color:var(--bg);font-family:Poppins;height:100%;padding:100px 0}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]{min-width:95%;width:95%;margin:0 auto;display:flex;flex-direction:column;align-items:center}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]{height:300px;margin-bottom:-180px;z-index:300}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{padding:200px 0 60px;background-color:#fff;border-radius:30px}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#0e2031}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .text-data[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .pokedex-entry-container[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .abilities-container[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .types-container[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .numeric-data-container[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]{margin:30px 0}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .text-data[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .pokedex-entry-container[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .abilities-container[_ngcontent-%COMP%], .pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .text-data[_ngcontent-%COMP%]   p.poke-id[_ngcontent-%COMP%]{color:#bbc4c5;font-weight:700;font-size:1.5rem}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .text-data[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#0e2031;font-size:3rem;font-weight:bolder}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .text-data[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#bbc4c5}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .types-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .types-container[_ngcontent-%COMP%]   .type--badge[_ngcontent-%COMP%]{border:none;border-radius:15px;padding:1px 20px;margin-right:10px;font-size:.7rem;font-weight:600;display:inline-flex;align-items:center;text-align:center}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .pokedex-entry-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-size:.9rem;width:90%}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .abilities-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:90%;display:grid;grid-template-columns:1fr 1fr;grid-gap:20px}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .abilities-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:2px solid #0e2031;border-radius:500px;padding:10px 5px;text-align:center}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .numeric-data-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .numeric-data-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .numeric-data-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:10px 0}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .numeric-data-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#e4edfd;width:50%;padding:10px 20px;border-radius:500px;text-align:center}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .chip-wrapper[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex;justify-content:space-evenly;flex-direction:row;width:95%}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .chip-wrapper[_ngcontent-%COMP%]   .status-chip[_ngcontent-%COMP%]{background-color:#e4edfd;margin:10px;height:30px;border-radius:400px;padding:5px;display:flex;flex-direction:row;align-items:center;justify-content:space-evenly}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .chip-wrapper[_ngcontent-%COMP%]   .status-chip[_ngcontent-%COMP%]   .param[_ngcontent-%COMP%]{border-radius:500px;padding:0 10px;min-width:30px;height:25px;font-weight:700}.pokemon-profile-container[_ngcontent-%COMP%]   .central-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .chip-wrapper[_ngcontent-%COMP%]   .status-chip[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{padding:0 20px}}"]}),e})()}];let m=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[a.Bz.forChild(s),a.Bz]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[l.ez,m]}),e})()}}]);