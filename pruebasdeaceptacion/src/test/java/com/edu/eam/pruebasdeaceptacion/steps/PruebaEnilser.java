package com.edu.eam.pruebasdeaceptacion.steps;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PruebaEnilser {

	

	WebDriver driver;
	
	
	
	@Given("^Abrimos el navegador y buscamos el sitio de ebay$")
	public void abrimos_el_navegador_y_buscamos_el_sitio_de_ebay() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "D:\\driver1\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.get("https://www.ebay.com/");
	}

	@When("^buscamos \"([^\"]*)\", elegimos la marca \"([^\"]*)\" con el tamaño \"([^\"]*)\"$")
	public void buscamos_elegimos_la_marca_con_el_tamaño(String objeto, String marca, String tamanio) throws Throwable {
		WebElement searchBox;
        searchBox = driver.findElement(By.id("gh-ac"));
        searchBox.sendKeys(objeto);
       
        
        WebElement botonBusca;
        botonBusca=driver.findElement(By.id("gh-btn"));
        botonBusca.click();
        Thread.sleep(3000);
        
        WebElement botonPuma;
        botonPuma=driver.findElement(By.linkText(marca));
        botonPuma.click();
        Thread.sleep(4000);
        
        WebElement checkSize;
        checkSize=driver.findElement(By.xpath(".//span[@class = 'cbx' and contains(text(), '"+tamanio+"')]"));
        checkSize.click();
        Thread.sleep(4000);
	}

	@When("^ejecutamos los demas procesos de la prueba$")
	public void ejecutamos_los_demas_procesos_de_la_prueba() throws Throwable {
		String resultados=driver.findElement(By.xpath(".//span[@class = 'rcnt']")).getText();
        System.out.println("La cantidad de resultados es: "+resultados);
       //driver.quit();
        
        WebElement ordernarPrecio;
        ordernarPrecio=driver.findElement(By.linkText("Mejor resultado"));
        ordernarPrecio.click();
        Thread.sleep(4000);
        
        WebElement elegirOpcion;
        elegirOpcion=driver.findElement(By.linkText("Precio + Envío: más bajo primero"));
        elegirOpcion.click();
        Thread.sleep(4000); 
	}

	
	@Then("^se deberia tener como minimo \"([^\"]*)\" registros para la pregunta siete$")
	public void se_deberia_tener_como_minimo_registros_para_la_pregunta_siete(String resultado) throws Throwable {
		
		WebElement galeria = driver.findElement(By.id("GalleryViewInner"));
        List<WebElement> precios = galeria.findElements(By.tagName("span"));
        List<WebElement> nombres = galeria.findElements(By.tagName("a"));
        int contador=0;
        String a="";
        for (int i = 1; i <= precios.size(); i++)
        {
       	  WebElement nombre = nombres.get((contador+1)*2-1);
       	    WebElement precio = precios.get(i);
       	  if(nombre.getAttribute("class").contains("vip")){
       		  a=nombres.get((contador+1)*2-1).getText();
       	  }
       	    	if(precio.getAttribute("class").contains("bold")||precio.getAttribute("class").contains("amt bold")) {   	                 
                 	  if(contador==5){
                     	  i=precios.size();
                       }
                 	System.out.println("Nombre: "+a+"   precio: "+precios.get(i).getText());
                 	contador++;
       	  }
       	    	}
		
		
		
		
		String actual=""+contador;
	    Assert.assertEquals(resultado, actual);
	}
}
