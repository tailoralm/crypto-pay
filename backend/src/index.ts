import 'dotenv/config';
import { buildAllDatabases } from "./shared/storage/database.factory";
import RoutinesController from "./modules/routines/routines.controller";
import Routes from "./modules/api/routes";


async function main(){
  let routinesController: RoutinesController;
  try {
    // Base
    await buildAllDatabases();

    // Modules
    Routes.listen(3000, () => {
      console.log('Server is running on port 3000')
    });
    routinesController = new RoutinesController();
    routinesController.createRoutines().then(() => {
        console.log('Routines created');
    });
  } catch (e) {
    routinesController.cancelAllJobs();
    console.error(e);
  }

}

main();

