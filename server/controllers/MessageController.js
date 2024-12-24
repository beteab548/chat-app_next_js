import getPrismaInstance from "../utils/PrismaClient.js";
export const addMessage = async (req, res, next) => {
    console.log("in the message controller");
    console.log(req.body);
  try {
    const prisma = getPrismaInstance();
    const { from, to, message } = req.body;
    const getUser = onlineUserLists.get(to);
    if (message && from && to) {
      const messageCreated = await prisma.Message.create({
        data: {
          sender: { connect: { id: parseInt(from) } },
          reciever: { connect: { id: parseInt(to) } },
          message,
          messageStatus: getUser ? "delivered" : "sent",
        },
        include: { sender: true, reciever: true },
      });
      return res.status(201).send("message stored!");
    }
    return res.status(400).send("message not created!");
  } catch (err) {
    next(err);
  }
  return res.status(401).send("unable to store a message!");
};
