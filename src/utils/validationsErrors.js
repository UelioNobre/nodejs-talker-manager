const errorMessages = {
  TALKER_NOT_FOUND: 'Pessoa palestrante não encontrada',
  NAME_UNDEFINED: 'O campo "name" é obrigatório',
  NAME_SHORT: 'O "name" deve ter pelo menos 3 caracteres',
  AGE_UNDEFINED: 'O campo "age" é obrigatório',
  AGE_INVALID: 'O campo "age" deve ser um número inteiro igual ou maior que 18',
  TALK_UNDEFINED: 'O campo "talk" é obrigatório',
  TALK_RATE_UNDEFINED: 'O campo "rate" é obrigatório',
  TALK_RATE_OUT_RANGE: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
  TALK_WATCHEDAT_UNDEFINED: 'O campo "watchedAt" é obrigatório',
  TALK_WATCHEDAT_OUT_RANGE: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
  DATE_OUT_RANGE: 'O parâmetro "date" deve ter o formato "dd/mm/aaaa"',
};

module.exports = {
  errorMessages,
};
