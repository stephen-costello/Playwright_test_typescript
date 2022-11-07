import faker from "faker";

import { EmailOtp } from "../pages/accounts-domain/EmailOtp";
import { SignUp } from "../pages/accounts-domain/SignUp";
import { createTestIdentifier } from "../utils";

/**
 * Project Name    : rest-assured-java
 * Developer       : OStephen Costello
 * Version         : -
 * Date            : 7/11/2022
 * Time            : -
 * Description     : Sample rnavigate to and assert test via playwright
 **/

describe("Sign up example flow", () => {
  afterAll(async () => {
    /**
     * Here you can put any cleanup logic like database connections etc.
     *
     * await db.disconnect();
     */
  });

  it("sign up", async () => {
    /**
     * Create a test identifier to provide some tracing capabilities on side-effects like data input.
     */
    const testIdentifier = createTestIdentifier(expect, browserName);
    const testEmail = faker.internet.email(testIdentifier).toLowerCase();

    /**
     * Initialize the expected page.
     */
    const signup = new SignUp(page);
    await signup.navigate();

    /**
     * Start doing something useful.
     */
    await signup.fillForm({ email: testEmail });
    await signup.signUp();

    const emailOtp = new EmailOtp(page);
    await emailOtp.navigate();

    /**
     * Validate the expected result.
     */
    expect(page.url()).toMatch(emailOtp.url);
  });
});
