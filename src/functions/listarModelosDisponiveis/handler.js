"use strict";

const apiStone = require("../../client/apiStone");

module.exports.listarModelosDisponiveis = async (event) => {
  try {
    const params = JSON.parse(event.body);
    const response = await apiStone(params.plano);

    return {
      statusCode: 200,
      body: JSON.stringify(response, null, 2),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};
