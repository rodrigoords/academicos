# java-skeleton
Base project to start a java based api server.

# Configuration
Course project have some pre configured features:
  - Base Apis framework with pageable and sort resources based on Spring rest, by default you can use with http basic auth on user: course pass: brasilHue,
  you can change the default user and pass editing br.com.qisi.course.config.security.Authentication.
  - Cucumber java test with base rest, database and mock steps.
# Cucumber
  To use cucumber features configure glue with your on package path on /src/test/java/br/com/qisi/course/integration/CucumberIntegrationTest.java
  create all features on /src/test/resources/features.

# Banner
  Course your own banner, you can customize it changing the banner.txt content.
