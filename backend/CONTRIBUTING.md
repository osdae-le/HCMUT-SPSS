## Steps to create a new API endpoint

- Step 1: Create a new feature branch from the `main` branch

- Step 2: Determine the resource where the API belongs to (for example: user, test, ....). Check if the module for the resouce already exists. If it is already there, go to step 4.

- Step 3: Create the correpesponding module, controller, service and repository for the object

```bash
    $ nest g module <resouce-name>
    $ nest g controller <resouce-name>
    $ nest g service <resouce-name>
```

This will create a new folder for the resource with module, controller and service.

- Step 4: Define the routing following RESTFUL URL style (https://restfulapi.net/resource-naming/) for the new API in resource controller, also include the swagger annotations (@ApiOperation, @ApiParam,...) to describe the endpoint.
  Inject resource service into the controller.
  Define the API business login in resource service class.
  Inject the resource repository into the resource service if required.
  If a data transfer object is required, create a separate dto object in dto folder.
  Test the API with Swagger UI.
  Most of the API endpoints will require passing authentication token to the header. To get the token, login with username and password and then get the token (it is stored in the user table).

- Step 5: Write the unit tests for the controller and service in the corresponding spec files. Make sure to cover all possible scenarios. Run and verify all the tests are passed:

```bash
   $ npm run test
```

- Step 6: Raise a PR to merge to the `development` branch. Ask for code review

- Step 7: Once code review is done. Merge the code into `development` branch.

- Step 8: Test on staging environment.

- Step 9: Once test is ok on staging environment, merge the code to the `main` branch.

- Step 10: Verify on production environment.
