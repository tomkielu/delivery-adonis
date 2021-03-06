'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/**
 * Retorna o usuário atual logado
 */
Route.get('v1/me', 'UserController.me').as('me').middleware('auth')  // middleware auth pois o usuario precisa estar logado pra ter as informações

/**
 * Importa as rotas de autenticação
 */
require('./auth')

/**
 * Importa as rotas de admin
 */
require('./admin')

/**
 * Importar as rotas de clientes
 */
require('./client')