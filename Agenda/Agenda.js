module.exports = class Agenda{
  constructor(Nome, SobreNome, Telefone1, Telefone2, Email, Endereco) {
    this._Nome = Nome;
    this._SobreNome = SobreNome;
    this._Telefone1 = Telefone1;
    this._Telefone2 = Telefone2;
    this._Email = Email;
    this._Endereco = Endereco;
    this._Agenda = [];
  }
  getNome() {
    return this._Nome;
  }
  setNome(Nome) {
    this._Nome = Nome;
  }
  getSobreNome() {
    return this._SobreNome;
  }
  setSobreNome(SobreNome) {
    this._SobreNome = SobreNome;
  }
  getTelefone1() {
    return this._telefone1;
  }
  setTelefone1(Telefone1) {
    this._telefone1 = Telefone1;
  }
  getTelefone2() {
    return this._telefone2;
  }
  setTelefone2(Telefone2) {
    this._telefone2 = Telefone2;
  }
  getEmail() {
    return this._email;
  }
  setEmail(Email) {
    this._email = Email;
  }
  getEndereco() {
    return this._endereco;
  }
  setEndereco(Endereco) {
    this._endereco = Endereco;
  }
  SalvaContato(pessoa) {
    this._Agenda.push(pessoa);
  }
  RemoverContato(pessoa) {
    const index = this._Agenda.indexOf(pessoa);
    if (index > -1) {
      this._Agenda.splice(index, 1);
    }
  }
  ToString() {
    return this._Agenda;
  }
}
