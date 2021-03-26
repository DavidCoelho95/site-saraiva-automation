// chrome
require('chromedriver');
// firefox 
// require('geckodriver');

const assert = require('assert');
const webdriver = require('selenium-webdriver');
const { elementTextContains } = require('selenium-webdriver/lib/until');
var until = webdriver.until;
var By = webdriver.By;


async function myMain(){

    // 1 - Declarando o chorme como padrão
    let driver = new webdriver.Builder().forBrowser('chrome').build();

    // 2 - Maximizar a tela na resolução 1366 x 768
    await driver.manage().window().setRect({ width: 1366, height: 768 });

    // 3 - Abrir a url do site
    await driver.get('https://www.saraiva.com.br');

    // 4- Localizar e clicar no botão "Entre ou cadastra-se"
    await driver.wait(until.elementLocated(By.css('#link-account > span')), 20000);
    await driver.findElement(By.css('#link-account > span')).click();

    // 5- Armazena o ID da janela original
    const originalWindow = await driver.getWindowHandle();

    // 6- Verifique se não temos outras janelas abertas 
    assert((await driver.getAllWindowHandles()).length === 1);

    // 7- Localizar e clicar no botão "Cadastrar" do pop-up
    await driver.wait(until.elementLocated(By.css('#vtexIdUI-saraiva-oauth > p')), 15000);
    await driver.findElement(By.css('#vtexIdUI-saraiva-oauth > p')).click();
    
    // 8- Aguarde a nova janela ou guia
    await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === 2,
        10000);

     // 9- Faça um loop até encontrarmos um novo identificador de janela
     const windows = await driver.getAllWindowHandles();
windows.forEach(async handle => {
  if (handle !== originalWindow) {
    await driver.switchTo().window(handle);
  }
});

    // 10- Aguarde até que a nova guia termine de carregar o conteúdo
    await driver.sleep(8000);

    //11 - Maximizar a tela na resolução 1366 x 768
    await driver.manage().window().setRect({ width: 1366, height: 768 });


    // 12- Clicar no botão "Cadastrar" da nova página
      await driver.wait(until.elementLocated(By.css("a.btn")), 15000);
      await driver.findElement(By.css("a.btn")).click();

    // 13- Preencher os campos

    //Nome
    await driver.wait(until.elementLocated(By.id('InputNome1')), 10000);
    await driver.findElement(By.id("InputNome1")).click()
    await driver.findElement(By.id("InputNome1")).sendKeys("Henrique")

   //Sobrenome
   await driver.wait(until.elementLocated(By.id('InputSobrenome1')), 10000);
   await driver.findElement(By.id("InputSobrenome1")).click()
   await driver.findElement(By.id("InputSobrenome1")).sendKeys("Severino Cardoso")

  //E-mail
   await driver.wait(until.elementLocated(By.id('InputEmail1')), 10000);
   await driver.findElement(By.id("InputEmail1")).click()
       //Atenção: Modificar o valor do campo apos primeira execução
   await driver.findElement(By.id("InputEmail1")).sendKeys("henriquec21310@gmail.com")

    //Senha
    await driver.wait(until.elementLocated(By.id('InputSenha1')), 10000);
    await driver.findElement(By.id("InputSenha1")).click()
    await driver.findElement(By.id("InputSenha1")).sendKeys("@Teste123")

    //Repetir senha
    await driver.wait(until.elementLocated(By.id('InputConfirmeSenha1')), 10000);
    await driver.findElement(By.id("InputConfirmeSenha1")).click()
    await driver.findElement(By.id("InputConfirmeSenha1")).sendKeys("@Teste123")

    //CPF - Atenção ao executar, mudar o CPF
    await driver.wait(until.elementLocated(By.id('InputCpf1')), 10000);
    await driver.findElement(By.id("InputCpf1")).click()
    await driver.sleep(2000);
    //Atenção: Modificar o valor do campo apos primeira execução
    await driver.findElement(By.id("InputCpf1")).sendKeys("162.745.740-26");

        //Selecionar o sexo feminino 
        //await driver.findElement(By.css('.row:nth-child(6) > .col .col:nth-child(1) label')).click()
    
      //Selecionar o sexo masculino 
      await driver.findElement(By.css('.row:nth-child(6) > .col .col:nth-child(2) label')).click()

     //Data de nascimento
     await driver.wait(until.elementLocated(By.css('#InputDataNascimento1')), 10000);
     await driver.findElement(By.css('#InputDataNascimento1')).click()
     await driver.findElement(By.css('#InputDataNascimento1')).sendKeys("11111994")

     //Telefone celular
     await driver.wait(until.elementLocated(By.css('#InputCelular1')), 10000);
     await driver.findElement(By.css('#InputCelular1')).click()
     await driver.findElement(By.css('#InputCelular1')).sendKeys("(11)99111-1111")

    //CEP 
     await driver.wait(until.elementLocated(By.css('#InputCep1')), 10000);
     await driver.findElement(By.css('#InputCep1')).click()
     await driver.findElement(By.css('#InputCep1')).sendKeys("05819-000")
     await driver.sleep(2000);

    //NÚMERO 
     await driver.wait(until.elementLocated(By.css('#InputNumero1')), 10000);
     await driver.findElement(By.css('#InputNumero1')).click()
     await driver.findElement(By.css('#InputNumero1')).sendKeys("11")
   
    //Complemento 
    await driver.wait(until.elementLocated(By.css('#InputComplemento1')), 10000);
    await driver.findElement(By.css('#InputComplemento1')).click()
    await driver.findElement(By.css('#InputComplemento1')).sendKeys("teste")

  //Telefone 
     await driver.wait(until.elementLocated(By.css('#InputTelefone1')), 10000);
     await driver.findElement(By.css('#InputTelefone1')).click()
     await driver.findElement(By.css('#InputTelefone1')).sendKeys("(33)3333-3333")

    //Referência  
     await driver.wait(until.elementLocated(By.css('#InputPontoReferencia1')), 10000);
     await driver.findElement(By.css('#InputPontoReferencia1')).click()
     await driver.findElement(By.css('#InputPontoReferencia1')).sendKeys("Apt 102")

      //Desejo receber e-mails de ofertas promocionais da Saraiva.
      //await driver.findElement(By.css('#.checkbox:nth-child(1) > label')).click()

      await driver.sleep(3000);

      // 14- Clicar no botão finalizar cadastro
      await driver.wait(until.elementLocated(By.css('#FinalizarCadastro1')), 10000);
      await driver.findElement(By.css('#FinalizarCadastro1')).click()
      await driver.sleep(25000)

      // 15- Assert confirmação
      // await driver.wait(until.elementLocated(By.id('#btn-sair-da-sua-conta-02')), 10000)
      // assert.strictEqual(await element.getText(), 'Sair da sua conta')
   
    .then (function () { 
    console.log("Cadastro realizado com sucesso!"); 
    }) 
    .catch(function (err) { 
    console.log("Error ", err, " occurred!") })



}
myMain();


  