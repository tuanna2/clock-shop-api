exports.up = async (knex) => {
  await knex.raw(`create table user (
        id int(11) NOT NULL AUTO_INCREMENT,
        username varchar(255) NOT NULL,
        fullname varchar(255) DEFAULT NULL,
        avatar varchar(2000) DEFAULT NULL,
        password varchar(255) NOT NULL,
        memberType TINYINT NOT NULL,
        lastLogin timestamp DEFAULT NOW(),
        softDelete TINYINT DEFAULT 0,
        createdAt timestamp DEFAULT NOW(),
        updatedAt timestamp DEFAULT NOW(),
        PRIMARY KEY (id)
    )`);
};
exports.down = async (knex) => {
  await knex.raw('drop table user');
};
