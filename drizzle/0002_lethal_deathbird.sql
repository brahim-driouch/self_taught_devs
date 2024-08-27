CREATE TABLE IF NOT EXISTS "projects" (
	"id" text PRIMARY KEY NOT NULL,
	"title" varchar(250),
	"description" text,
	"link" varchar(250) DEFAULT '',
	"screenshot" text DEFAULT '',
	"repo" text DEFAULT ''
);
--> statement-breakpoint
ALTER TABLE "profile" ADD COLUMN "about" varchar(250);--> statement-breakpoint
ALTER TABLE "profile" ADD COLUMN "website" varchar(250);--> statement-breakpoint
ALTER TABLE "profile" ADD COLUMN "github" varchar(250);--> statement-breakpoint
ALTER TABLE "profile" ADD COLUMN "linkedIn" varchar(250);--> statement-breakpoint
ALTER TABLE "profile" ADD COLUMN "skills" varchar(350);--> statement-breakpoint
ALTER TABLE "profile" ADD COLUMN "technologies" text;