import getPrismaInstance from "../utils/PrismaClient.js";
export const addMessage = async (req, res, next) => {
  console.log("in the message controller");
  try {
    const prisma = getPrismaInstance();
    const {
      body: { from, to, message },
    } = req.body;
    const getUser = onlineUserLists.get(to);
    console.log(from, to, message);
    if (message && from && to) {
      const messageCreated = await prisma.message.create({
        data: {
          sender: { connect: { id: parseInt(from) } },
          receiver: { connect: { id: parseInt(to) } },
          message,
          messageStatus: getUser ? "delivered" : "sent",
        },
        include: { sender: true, receiver: true },
      });
      return res.status(201).send("message stored!");
    }
    return res.status(400).send("message not created!");
  } catch (err) {
    next(err);
  }
  return res.status(401).send("unable to store a message!");
};
