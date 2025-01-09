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
      return res.status(201).json({ message: messageCreated });
    }
    return res.status(400).send("message not created!");
  } catch (err) {
    next(err);
  }
  return res.status(401).send("unable to store a message!");
};
export const getMessages = async (req, res, next) => {
  try {
    const prisma = getPrismaInstance();
    const { from, to } = req.params;
    console.log("getting the messages...");
    console.log(req.params);
    const messages = await prisma.message.findMany({
      where: {
        OR: [
          {
            senderId: parseInt(to),
            receiverId: parseInt(from),
          },
          {
            senderId: parseInt(from),
            receiverId: parseInt(to),
          },
        ],
      },
      orderBy: {
        id: "asc",
      },
    });
    const unreadMessages = [];
    messages.forEach((message, index) => {
      if (
        message.messageStatus !== "read" &&
        message.senderId === parseInt(to)
      ) {
        // console.log(message);
        message.messageStatus = "read";
        unreadMessages.push(message.id);
      }
    });
    await prisma.message.updateMany({
      where: { id: { in: unreadMessages } },
      data: { messageStatus: "read" },
    });
    res.status(200).json({ messages });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
