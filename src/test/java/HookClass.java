import org.base.BaseClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HookClass extends BaseClass{
	@Before
	public void beforeExecution() {
		launchChrome();
		d.manage().window().maximize();

	}
	@After
	public void afterExecution() {
		d.close();

	}

}
