module.exports = async (req, res) => {
  const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN;

  if (req.method === "GET") {
    return res.status(200).json({
      method: "GET",
      tokenExists: !!verifyToken,
      tokenLength: verifyToken ? verifyToken.length : 0,
      receivedTokenMatches: req.query["hub.verify_token"] === verifyToken
    });
  }

  return res.status(200).send("OK");
};
