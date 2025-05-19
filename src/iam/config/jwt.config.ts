import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => {
  console.log('JWT_SECRET in config:', process.env.JWT_SECRET);
  return {
    secret: process.env.JWT_SECRET,
    audience: process.env.JWT_TOKEN_AUDIENCE,
    issuer: process.env.JWT_TOKEN_ISSUER,
    accessTokenTtl: parseInt(process.env.JWT_ACCESS_TOKEN_TTL ?? '3600', 10),
  };
});
