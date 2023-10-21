export class Task{
  //atributos
   private _name:string;
   private _descriçao: string;
   private _situacao: string;

   // construtor com parametros nomeados
   constructor({
    name,
    descricao,
    situacao = "Pendente"
   }:{
    name: string,
    descricao: string,
    situacao?:string
   }

   ){
    this._name = name,
    this._descriçao = descricao,
    this._situacao = situacao


   }

 //getters and setters

 get name() : string {
  return this._name;
 }

 set name(value: string) {
  this._name = value;
 }
 get descricao() : string {
  return this._descriçao;
 }

 set descricao(value: string) {
  this._descriçao = value;
 }
 get situacao() : string {
  return this._situacao;
 }

 set situacao(value: string) {
  this._situacao = value;
 }
}
