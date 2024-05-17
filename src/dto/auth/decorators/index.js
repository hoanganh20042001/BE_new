"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SwaggerBaseApiResponse = exports.BaseApiErrorResponse = exports.BaseApiErrorObject = exports.BaseApiResponse = exports.createRequestContext = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var role_constant_1 = require("../constants/role.constant");
var auth_token_output_dto_1 = require("../dto/auth-token-output.dto");
var request_context_dto_1 = require("./request-context.dto");
// Creates a RequestContext object from Request
function createRequestContext(request) {
    var ctx = new request_context_dto_1.RequestContext();
    ctx.requestID = request.header(role_constant_1.REQUEST_ID_TOKEN_HEADER);
    ctx.url = request.url;
    ctx.ip = request.header(role_constant_1.FORWARDED_FOR_TOKEN_HEADER)
        ? request.header(role_constant_1.FORWARDED_FOR_TOKEN_HEADER)
        : request.ip;
    // If request.user does not exist, we explicitly set it to null.
    ctx.user = request.user
        ? (0, class_transformer_1.plainToClass)(auth_token_output_dto_1.UserAccessTokenClaims, request.user, {
            excludeExtraneousValues: true
        })
        : null;
    return ctx;
}
exports.createRequestContext = createRequestContext;
var BaseApiResponse = /** @class */ (function () {
    function BaseApiResponse() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: Object })
    ], BaseApiResponse.prototype, "meta");
    return BaseApiResponse;
}());
exports.BaseApiResponse = BaseApiResponse;
var BaseApiErrorObject = /** @class */ (function () {
    function BaseApiErrorObject() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: Number })
    ], BaseApiErrorObject.prototype, "statusCode");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String })
    ], BaseApiErrorObject.prototype, "message");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ type: String })
    ], BaseApiErrorObject.prototype, "localizedMessage");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String })
    ], BaseApiErrorObject.prototype, "errorName");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: Object })
    ], BaseApiErrorObject.prototype, "details");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String })
    ], BaseApiErrorObject.prototype, "path");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String })
    ], BaseApiErrorObject.prototype, "requestId");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String })
    ], BaseApiErrorObject.prototype, "timestamp");
    return BaseApiErrorObject;
}());
exports.BaseApiErrorObject = BaseApiErrorObject;
var BaseApiErrorResponse = /** @class */ (function () {
    function BaseApiErrorResponse() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: BaseApiErrorObject })
    ], BaseApiErrorResponse.prototype, "error");
    return BaseApiErrorResponse;
}());
exports.BaseApiErrorResponse = BaseApiErrorResponse;
function SwaggerBaseApiResponse(type) {
    var ExtendedBaseApiResponse = /** @class */ (function (_super) {
        __extends(ExtendedBaseApiResponse, _super);
        function ExtendedBaseApiResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            (0, swagger_1.ApiProperty)({ type: type })
        ], ExtendedBaseApiResponse.prototype, "data");
        return ExtendedBaseApiResponse;
    }(BaseApiResponse));
    // NOTE : Overwrite the returned class name, otherwise whichever type calls this function in the last,
    // will overwrite all previous definitions. i.e., Swagger will have all response types as the same one.
    var isAnArray = Array.isArray(type) ? ' [ ] ' : '';
    Object.defineProperty(ExtendedBaseApiResponse, 'name', {
        value: "SwaggerBaseApiResponseFor ".concat(type, " ").concat(isAnArray)
    });
    return ExtendedBaseApiResponse;
}
exports.SwaggerBaseApiResponse = SwaggerBaseApiResponse;
