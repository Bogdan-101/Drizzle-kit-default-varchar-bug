CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"avatar" varchar(255) DEFAULT 'https://example.com/images/avatar.png'
);
