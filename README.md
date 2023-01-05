# Ecommerce API

Using  NODE.JS and MONGODB

This API is used to do the CRUD operations

## Installation

Install my-project with npm

```bash
  npm install
  npm start
```

## API Reference

#### Get all products

```http
  GET /products
```


#### Create product

```http
  POST /products/create
```

| Parameter | Type     | 
| :-------- | :------- | 
| `name`      | `string` |
|   `quantity`|  `Number` |

#### Delete product

```http
  DELETE /products/delete
```

| Parameter | Type     | 
| :-------- | :------- | 
| `id`      | `string` |

#### Update product

```http
  DELETE /products/update
```
| Parameter | Type     | 
| :-------- | :------- | 
| `id`      | `string` |
| `quantity`      | `number` |
