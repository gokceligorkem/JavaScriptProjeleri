Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}
let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Soru("2-JavaScript'deki yorum satırları, _______ tarafından yok sayılır.", { a: "bilgisayar", b: "işletim sistemi", c: "derleyici",d:"tarayıcı" }, "d"),
    new Soru("3-Id attribute (özellik) değerine göre bir belge öğesi (document element) nasıl seçilir ?", { a: "getId()", b: "getElementsbyId()", c: "get()",d:"Hepsi" }, "b"),
    new Soru("4-SetTimeout() yöntemi _____ için kullanılır.", { a: "yineleme zamanı", b: "belirli bir süre sonra çağrılacak bir fonksiyon", c: "belirli bir süre sonra bir olayın (event) çağırılması" }, "b")
];