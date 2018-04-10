package com.edu.eam.pruebasdeaceptacion.steps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepsDefinitions {

	WebDriver driver;
	@Given("^Abrimos el navegador y el sitio web del logins$")
	public void abrimos_el_navegador_y_el_sitio_web_del_logins() throws Throwable {
		System.setProperty("webdriver.ie.driver", "D:\\driver\\IEDriverServer.exe");
		//System.setProperty("webdriver.gecko.driver", "D:\\driver\\geckodriver.exe");
		driver= new InternetExplorerDriver();
		//WebDriver driver= new FirefoxDriver();
		//WebDriver driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.facebook.com");
		
	}

	@When("^El usuario ingrese el username \"([^\"]*)\", y el password \"([^\"]*)\"$")
	public void el_usuario_ingrese_el_username_y_el_password(String usuario, String contrasena) throws Throwable {
		WebElement link;
		driver.findElement(By.id("email")).sendKeys(usuario);
		driver.findElement(By.id("pass")).sendKeys(contrasena);
        Thread.sleep(5000);
	}

	@When("^El usuario presiones clic en el boton entrar$")
	public void el_usuario_presiones_clic_en_el_boton_entrar() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^El usuario deberia ver el mensaje \"([^\"]*)\"$")
	public void el_usuario_deberia_ver_el_mensaje(String arg1) throws Throwable {
	  String a=driver.findElement(By.id("pass")).getText();
		driver.close();
		Assert.assertEquals("", arg1);
	}
}
