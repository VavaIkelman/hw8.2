export default class ErrorRepository {
  constructor() {
    this.map = new Map([
      [400, 'bad request'],
      [401, 'unauthorisation'],
      [402, 'payment required'],
      [403, 'forbidden'],
      [404, 'not found'],
      [405, 'method not allowed'],
      [406, 'not acceptable'],
      [407, 'proxy authentication required'],
    ]);
  }

  translate(code) {
    if (this.map.get(code)){
        return this.map.get(code);
    } 
    return 'Unknown error'
    }
  
}
