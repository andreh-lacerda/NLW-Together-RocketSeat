import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { UserListSendComplimentsController } from './controllers/UserListSendComplimentsController';
import { UserListReceiveComplimentsController } from './controllers/UserListReceiveComplimentsController';
import { TagsListController } from './controllers/TagsListController';
import { UserListController } from './controllers/UserListController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const userListSendComplimentsController = new UserListSendComplimentsController();
const userListReceiveComplimentsController = new UserListReceiveComplimentsController();
const tagsListController = new TagsListController();
const userListController = new UserListController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated ,ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated ,createComplimentController.handle);

router.get("/users/compliments/send", ensureAuthenticated, userListSendComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, userListReceiveComplimentsController.handle);
router.get("/tags", ensureAuthenticated, tagsListController.handle);
router.get("/users", ensureAuthenticated, userListController.handle);

export { router }