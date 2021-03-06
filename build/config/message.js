"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CUSTOM_MESSAGE = exports.ERROR_NULL = exports.ERROR_USER_PASSWORD = exports.ERROR_JWT = exports.ERROR_LOGIN = exports.SUCCESS_MESSAGE = exports.ERROR_AUTORIZACAO = exports.ERROR_MESSAGE = void 0;
const SUCCESS_MESSAGE = () => "OPERAÇÃO EXECUTADA COM SUCESSO.";
exports.SUCCESS_MESSAGE = SUCCESS_MESSAGE;
const ERROR_AUTORIZACAO = () => "VOCÊ NÃO TEM PERMISSÃO PARA GERENCIAR ESSE REGISTRO.";
exports.ERROR_AUTORIZACAO = ERROR_AUTORIZACAO;
const ERROR_MESSAGE = () => "OPS! OCORREU ALGUM ERROR.";
exports.ERROR_MESSAGE = ERROR_MESSAGE;
const ERROR_LOGIN = () => "OPS! CPF OU SENHA INVÁLIDO";
exports.ERROR_LOGIN = ERROR_LOGIN;
const ERROR_JWT = () => "OPS! TOKEN INVÁLIDO";
exports.ERROR_JWT = ERROR_JWT;
const ERROR_USER_PASSWORD = () => "OPS! USUÁRIO OU SENHA INVÁLIDOS";
exports.ERROR_USER_PASSWORD = ERROR_USER_PASSWORD;
const ERROR_NULL = () => "OPS! ESSA SOLICITAÇÃO NÃO RETORNOU NENHUM REGISTRO.";
exports.ERROR_NULL = ERROR_NULL;
const CUSTOM_MESSAGE = (message) => message;
exports.CUSTOM_MESSAGE = CUSTOM_MESSAGE;
